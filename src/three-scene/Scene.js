import * as THREE from 'three'
import { Canvas, useThree, useLoader, useFrame } from '@react-three/fiber'
import React, { useLayoutEffect } from 'react'
import { OrbitControls } from '@react-three/drei'

function Mesh(props) {
    const sphereMesh = React.useRef()
    const groupMesh = React.useRef()

    useLayoutEffect(()=> {
        //groupMesh.current.rotateOnAxis(props.axis, props.angle)
        // groupMesh.current.setRotationFromAxisAngle(props.axis, props.angle)
    }, [])

    // const groupMesh = useUpdate(group => {
    //     group.rotateOnAxis(props.axis, props.angle)
    // }, [])

    useFrame(()=> {
        groupMesh.current.rotation.y += 0.001
        //groupMesh.current.rotateOnAxis(props.axis, props.angle)
        //sphereMesh.current.rotation.y += Math.PI / 500
    })

    return (
        <group 
            ref={groupMesh} 
            position={[0, -0.75, 3]}
            rotation-y={Math.PI / 5} 
            rotation-x={Math.PI / 5}
        >
            <mesh ref={sphereMesh}>
                <sphereGeometry args={[2, 10, 10]}/>
                <meshStandardMaterial wireframe wireframeLinewidth={0.5}/>
            </mesh>
        </group>
        
    )
}

function Scene() {

    return (
        <Canvas 
            dpr={window.devicePixelRatio}
            gl={{ outputEncoding: THREE.sRGBEncoding, antialias: true, toneMapping: THREE.NoToneMapping }}
            camera={{ fov: 75, near: 0.1, far: 1000, position: [10, 0, 0] }}
        >
            {/* <OrbitControls minDistance={5} maxDistance={5}/> */}
            <Mesh axis={new THREE.Vector3(0, 1, 0)} angle={Math.PI/5}/>
            
        </Canvas>
    )
}

export default Scene