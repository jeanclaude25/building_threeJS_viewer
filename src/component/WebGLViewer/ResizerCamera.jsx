import React, { useEffect, useState } from 'react'
import { useFrame, useThree } from "@react-three/fiber"
import useResizeObserver from '@react-hook/resize-observer'
import gsap from 'gsap/all'


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
                x:((mouse.x * viewport.width) / 40)+0.5,
                y:((mouse.y * viewport.height) / 40)+4
            }
        )
        camera.lookAt(0,0,0)
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
