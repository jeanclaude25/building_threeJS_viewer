import React, { useEffect, useState } from 'react'
import { useFrame, useThree } from "@react-three/fiber"
import useResizeObserver from '@react-hook/resize-observer'
import gsap from 'gsap/all'
import { config } from "./config"

const cam_initial = {
    x:config.camera.position.x,
    y:config.camera.position.y,
    z:config.camera.position.z
}

const useSize = (target) => {
  const [size, setSize] = useState()

  React.useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect())
  }, [target])

  useResizeObserver(target, (entry) => setSize(entry.contentRect))
  return size
}


export const ResizerCamera = ({target}) => {
    const size = useSize(target)
    const {mouse, viewport, camera} = useThree()

    useFrame(() => {
        
        /**Animer la camera selon le curseur souris */
        gsap.to(
            camera.position,{
                duration:1,
                x:((mouse.x * viewport.width) / 40) + cam_initial.x,
                y:((mouse.y * viewport.height) / 40) + cam_initial.y
            }
        )
        camera.lookAt(0,-7,0)
        })


        useEffect(() => {
            /**Selon la taille, agir sur la camera */
            if(size != undefined){
                const value = (size.width/size.height)/2
                camera.zoom = value
                camera.updateProjectionMatrix()
            }
            
        },[size])

    return (
        <> 
        </>
    )
}
