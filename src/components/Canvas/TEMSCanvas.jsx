import React from 'react';
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Center } from '@react-three/drei';
import styles from '../../styles/TEMS.module.css';

function OscillatingModel({
  url = import.meta.env.BASE_URL + 'models/TEMS_Logo_3D.gltf',
  position = [0, 0, 0],
  rotation = [0, 0, 0],   
  scale = 1,
  amplitudeDeg = 45,      
  speed = 0.8
}) {

  const group = useRef()
  const { scene } = useGLTF(url)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const amp = (amplitudeDeg * Math.PI) / 180
    if (group.current) {
      group.current.rotation.x = rotation[0]
      group.current.rotation.y = rotation[1]
      group.current.rotation.z = rotation[2] + Math.sin(t * speed) * amp
    }
  })

  return (
    <primitive
      ref={group}
      object={scene}
      position={position}
      scale={scale}
    />
  )
}
// precarga (opcional, mejora UX)
useGLTF.preload(import.meta.env.BASE_URL + 'models/TEMS_Logo_3D.gltf')


function TEMSCanvas() {

  return (
    <div className={styles.logo_canvas}>
      <div className={styles.logo_space}>
        <Canvas
          camera={{ position: [0, 0.6, 2.2], fov: 45 }}
          style={{ width: '100%', height: '100%' }}
        >
          <ambientLight intensity={1.0} />
          <directionalLight position={[2, 2, 3]} intensity={5} />

          <Suspense fallback={null}>
            {/* Center ajusta y centra el modelo automáticamente */}
            <Center disableY>
              <OscillatingModel
                url={import.meta.env.BASE_URL + "models/TEMS_Logo_3D.gltf"}
                position={[0, 0, 0]}            
                rotation={[Math.PI / 2, Math.PI, Math.PI]}               
                scale={4.0}
                amplitudeDeg={45}                   
                speed={0.8}                         
              />
            </Center>
          </Suspense>

          {/* Opcional: desactiva zoom/pan si no quieres interacción */}
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </div>
  );
}

export default TEMSCanvas;