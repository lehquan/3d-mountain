import React  from 'react'
import Lights from './Lights';
import Terrain from './Terrain';
import Controls from './Controls';

const Scene = () => {

  return(
      <>
        <Lights/>
        <Terrain/>
        <Controls/>
        <mesh>
          <boxBufferGeometry args={[100, 100, 100]}/>
          <meshPhongMaterial color={'hotpink'}/>
          <axesHelper args={[1000]}/>
        </mesh>
      </>
  )

}

export default Scene
