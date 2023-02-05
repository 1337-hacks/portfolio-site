import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import React from 'react'

function Mesh() {
    const groupMesh = React.useRef()

    useFrame(()=> {
        groupMesh.current.rotation.y += 0.001
    })

    function SphereToQuads(g) {
        let p = g.parameters;
        let segmentsX = p.widthSegments;
        let segmentsY = p.heightSegments-2;
        let mainShift = segmentsX + 1;
        let indices = [];
        for (let i = 0; i < segmentsY + 1; i++) {
            let index11 = 0;
            let index12 = 0;
            for (let j = 0; j < segmentsX; j++) {
                index11 = (segmentsX + 1) * i + j;
                index12 = index11 + 1;
                let index21 = index11;
                let index22 = index11 + (segmentsX + 1);
                indices.push(index11 + mainShift, index12 + mainShift);
                if (index22 < ((segmentsX + 1) * (segmentsY + 1) - 1)) {
                    indices.push(index21 + mainShift, index22 + mainShift);
                }
            }
            if ((index12 + segmentsX + 1) <= ((segmentsX + 1) * (segmentsY + 1) - 1)) {
                indices.push(index12 + mainShift, index12 + segmentsX + 1 + mainShift);
            }
        }
        
        let lastIdx = indices[indices.length - 1] + 2;
        
        // poles
        for(let i = 0; i < segmentsX; i++){
            //top
            indices.push(i, i + mainShift, i, i + mainShift + 1);
            
            // bottom
            let idx = lastIdx + i;
            let backShift = mainShift + 1;
            indices.push(idx, idx - backShift, idx, idx - backShift + 1);
        }
        
        g.setIndex(indices);
    }

    let g = new THREE.SphereGeometry(5, 20, 15)
    SphereToQuads(g)
    let m = new THREE.LineBasicMaterial({color: "#251818"})

    return (
        <group 
            ref={groupMesh} 
            position={[0, 0, 0]}
            rotation-x={Math.PI / 7}
            rotation-y={Math.PI / 7}
        >
            <lineSegments args={[g, m]}/>
        </group>
        
    )
}

function Scene() {

    return (
        <Canvas
            flat linear 
            dpr={window.devicePixelRatio}
            gl={{ outputEncoding: THREE.sRGBEncoding, antialias: true, toneMapping: THREE.NoToneMapping }}
            camera={{ fov: 75, near: 0.1, far: 1000, position: [15, 0, 0] }}
        >
            <Mesh axis={new THREE.Vector3(0, 1, 0)} angle={Math.PI/5}/>
        </Canvas>
    )
}

export default Scene