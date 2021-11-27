import React, { useRef } from 'react'

const Lights = () => {
  const ref = useRef()
  const ref2 = useRef()

  return(
      <group>
        <FakeSphere/>
        <ambientLight ref={ref2} position={[0, 4, 0]} intensity={0.3} />
        <directionalLight intensity={0.5} position={[0, 0, 0]} color={0xffffff} />
        <pointLight
            ref={ref}
            intensity={1}
            position={[-6, 3, -6]}
            color={0xffcc77}
        >
        </pointLight>
        <pointLight
            ref={ref2}
            intensity={1}
            position={[6, 3, 6]}
            color={0xffcc77}
        >
        </pointLight>
      </group>
  )
}

const FakeSphere = () => {
  return(
      <mesh>
        <sphereBufferGeometry attach={'geometry'} args={[0.7, 30, 30]}/>
        <meshBasicMaterial color={0xfff1ef}/>
      </mesh>
  )
}

export default Lights

