import React, { useRef } from 'react'
import { extend, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// Calling extend with the native OrbitControls class from Three.js
// will make orbitControls available as a native JSX element.
// Notice how the OrbitControls classname becomes lowercase orbitControls when used as JSX element.
extend({ OrbitControls })

const Controls = ({ props }) => {
  const ref = useRef()

  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree()

  //
  useFrame(() => {
    ref.current && ref.current.update()
  })

  return(
      <orbitControls ref={ref} args={[camera, domElement]} {...props} />
  )

}

export default Controls
