import React, { useMemo, useRef, useState, useEffect } from 'react'
import { Canvas } from "@react-three/fiber"
import { AdaptiveDpr, PresentationControls, useBVH } from "@react-three/drei"
import { config } from "./config"
import { BigCircleStyles, GlViewer, SmallCircleStyles } from "./styles"
import { LoadModels } from './LoadModels'
import { ResizerCamera } from './ResizerCamera'
import { PointLight } from './PointLight'
import gsap from 'gsap/all'


export const WebGLViewer = () => {
  
  // useBVH(rayCastMesh)

  const target = useRef(null)
    /**Load 3d object and 3dpoint clouds */
    const [json, setJson] = useState('json_models/model_01.json')
    

    const objects = useMemo(() => {
        const jsonReader = require("./readJson");
        return jsonReader.readJson(json);
      }, [json]);
   
      const handleMove = (e) => {

        
          const circle = document.getElementById('circle')
        const radiusSize =  config.mouse.size.substring(0,2) /2
        
        gsap.to(
          circle.style,{
              duration: config.mouse.followTime,
              left:(e.clientX- radiusSize) + 'px',
              top:(e.clientY-radiusSize) + 'px'
          }
      )
      const sCircle = document.getElementById('smallCircle')
      gsap.to(
        sCircle.style,{
            duration: config.mouse.followTime /2,
            left:(e.clientX) + 'px',
            top:(e.clientY) + 'px'
        }
    )
        
      }
      
      useEffect(() => {
        const circle = document.getElementById('circle') 
        circle.style.left = 0 + 'px'
        circle.style.top = 0 + 'px'
        const sCircle = document.getElementById('smallCircle') 
        sCircle.style.left = 0 + 'px'
        sCircle.style.top = 0 + 'px'
    }, [])

    return (
        <>
          <BigCircleStyles id='circle' className='circle'/>
          <SmallCircleStyles id='smallCircle' />
            <GlViewer onMouseMove={handleMove}>
            <Canvas 
            
            shadows
            camera={{ fov: 75, position: [
              config.camera.position.x, 
              config.camera.position.y, 
              config.camera.position.z
            ] }}
            id="webgl"
            ref={target}
            gl={{
              alpha: config.scene.alpha,
              pixelRatio: config.scene.pixelRatio,
              antialias: config.scene.antialias.enable,
              preserveDrawingBuffer: config.scene.drawing_buffer,
            }}
          colorManagement={false}
          // raycaster={{ filter: (intersects, state) => intersects.slice(0, 1) }}
          
        >
          
          <AdaptiveDpr pixelated />

          <ambientLight color="white" intensity={0.05} />
          <ResizerCamera target= {target} />
          
          
          <PresentationControls
              global={false} // Spin globally or by dragging the model
              snap={true} // Snap-back to center (can also be a spring config)
              speed={1} // Speed factor
              zoom={1} // Zoom factor when half the polar-max is reached
              rotation={[0, 0, 0]} // Default rotation
              polar={[0, Math.PI / 16]} // Vertical limits
              azimuth={[-Infinity, Infinity]} // Horizontal limits
              config = { { mass: 1, tension: 150, friction: 26 } } // Spring config
            >
              <directionalLight color="white" intensity={1} position={[5,5,5]}/>
          <LoadModels objects={objects.models}/>
          <PointLight/>
          

          </PresentationControls>
          </Canvas>
            </GlViewer>
        </>
    )
}
