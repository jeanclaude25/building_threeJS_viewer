import { useFrame, useThree } from "@react-three/fiber"
import React, { useEffect, useState, useRef } from 'react'
import { Raycaster } from "three"
import gsap from 'gsap/all'



export const PointLight = () => {
    const {mouse, camera} = useThree()
    const rayCastMesh = useRef(null)
    const [lightPosition, setLightPosition] = useState([0,1,0])
    
    const light = useRef(null)
    const raycaster = new Raycaster()

    
    

    useFrame(() => {
        let intersect;
        if(rayCastMesh != undefined){
            raycaster.setFromCamera(mouse,camera)
            intersect = raycaster.intersectObjects([rayCastMesh.current])
            
            if(intersect[0] != undefined){

                setLightPosition([
                    intersect[0].point.x,
                    intersect[0].point.y,
                    intersect[0].point.z
                ])
                
                

                }
            
        }
        
        })

        useEffect(() => {
            gsap.to(
                    light.current.position,{
                        duration:1,
                        x:lightPosition[0],
                        y:lightPosition[1]+1,
                        z:lightPosition[2]
                    }
                )
        }, [lightPosition])
        

    return (
        < >
            <pointLight ref={light} distance={5} intensity={1.5} color="orange" />
            
            <mesh ref={rayCastMesh} name='rayCastMesh' rotation={[-Math.PI / 2,0,0]} position={[0,1,0]} >
            <planeBufferGeometry attach="geometry" args={[100,100]} />
            <meshBasicMaterial attach="material" visible={false}/>
          </mesh>
        </>
    )
}
