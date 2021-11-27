import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei';
import Lights from './components/Lights';
import Controls from './components/Controls';
import Terrain from './components/Terrain';

const App = () => {
  return (
      <Suspense fallback={<span>loading...</span>}>
        <Canvas camera={{ position: [0, 100, 600], zoom: 30 }}>
          <color attach="background" args={['#ffd5c0']} />
          <Lights/>
          <Environment preset='night' />
          <Controls />
          <Terrain/>
        </Canvas>
      </Suspense>
  )
}


export default App;
