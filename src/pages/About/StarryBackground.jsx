import React from 'react'
import { Canvas } from '@react-three/fiber'

function Stars() {
  let stars = []
  for (let i = 0; i < 1000; i++) {
    const x = (Math.random() - 0.5) * 1000
    const y = (Math.random() - 0.5) * 1000
    const z = (Math.random() - 0.5) * 1000
    stars.push(<mesh position={[x, y, z]} key={i}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshStandardMaterial color='white' />
    </mesh>)
  }
  return (
    <>{stars}</>
  )
}

function StarryBackground() {
  return (
    <Canvas>
      <ambientLight />
      <Stars />
    </Canvas>
  )
}

export default StarryBackground;
