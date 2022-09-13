import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh } from 'three'


function Cube() {
  const meshRef = useRef()


  useFrame(() => {

    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;

  })


  return (
    <>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]}></boxGeometry>
        <meshStandardMaterial color={"gray"} />
      </mesh>

      <pointLight position={[10, 10, 10]}></pointLight>
      {/* <ambientLight args={['', 1]} /> */}
    </>
  )
}

export default function Home() {

  return (
    <>

      <Canvas >

        <Cube />

      </Canvas>

    </>
  )
}
