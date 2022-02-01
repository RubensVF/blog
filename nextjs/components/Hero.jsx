import * as THREE from 'three'
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Reflector, Text, useTexture, useGLTF } from '@react-three/drei'
function Carla(props) {
  const { scene } = useGLTF('https://bfplr.csb.app/carla-draco.glb')
  return <primitive object={scene} {...props} />
}

function VideoText({ clicked, ...props }) {
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: 'https://bfplr.csb.app/drei.mp4', crossOrigin: 'Anonymous', loop: true ,muted:"muted"}))
  useEffect(() => void (clicked && video.play()), [video, clicked])
  return (
    <Text font="https://bfplr.csb.app/Inter-Bold.woff" fontSize={1} letterSpacing={-0.06} {...props}>
      Rubs Tech Blog
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>
    </Text>
  )
}

function Ground() {
  const [floor, normal] = useTexture(['https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Jzpo-SurfaceImperfections003_1K_var1.jpg', 'https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Soy5-SurfaceImperfections003_1K_Normal.jpg'])
  return (
    <Reflector resolution={512} args={[10, 10]} mirror={0.4} mixBlur={8} mixStrength={1} rotation={[-Math.PI / 2, 0, Math.PI / 2]} blur={[400, 100]}>
      {(Material, props) => <Material color="#a0a0a0" metalness={0.4} roughnessMap={floor} normalMap={normal} normalScale={[1, 1]} {...props} />}
    </Reflector>
  )
}

function Intro({ start, set }) {
  const [vec] = useState(() => new THREE.Vector3())
  useEffect(() => setTimeout(() => set(true), 500), [])
  return useFrame((state) => {
    if (start) {
      state.camera.position.lerp(vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14), 0.05)
      state.camera.lookAt(0, 0, 0)
    }
  })
}

const Hero = () => {
  const [clicked,setClicked] = useState()
  const [ready, setReady] = useState(false)
  const store = {  ready, setReady }
  useState(()=>{setTimeout(()=>setClicked(true),500)},[])
  return (
    <div style={{
      height: '50vh'
    }}>
      <Canvas concurrent gl={{ alpha: false }} pixelRatio={[1, 1.5]} camera={{ position: [0, 3, 100], fov: 15 }}>
        <color attach="background" args={['black']} />
        <fog attach="fog" args={['black', 15, 20]} />
        <Suspense fallback={null}>
          <group position={[0, -1, 0]}>
            <Carla rotation={[0, Math.PI - 0.4, 0]} position={[-1.2, 0, 0.6]} scale={[0.26, 0.26, 0.26]} />
            <VideoText clicked={clicked} {...store} position={[0, 1.3, -2]} />
            <Ground />
          </group>
          <ambientLight intensity={0.5} />
          <spotLight position={[0, 10, 0]} intensity={0.3} />
          <directionalLight position={[-20, 0, -10]} intensity={0.7} />
          <Intro start={ready} set={setReady} />
        </Suspense>
      </Canvas>
      </div>
  )
};



export default Hero;