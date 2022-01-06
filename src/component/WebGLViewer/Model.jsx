import * as THREE from 'three'
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { config } from "./config";

const mat = (indice) => {
    const material = new THREE.MeshPhysicalMaterial()

    
    indice == 'primary'?
    material.color = new THREE.Color(config.html.color.primary):
    material.color = new THREE.Color(config.html.color.secondary);
    
    // material.side = THREE.DoubleSide
    // material.wireframe = true
    // material.transparent = true

    return material
}

export const Model = ({ name, filepath, selection, onUpdate }) => {

    const model = useRef();
    const { nodes } = useGLTF(filepath);
    // const gltf = useGLTF(filepath);


  return (
            <>
            <mesh
                ref={model}
                name={name+"_primary"}
                key = {name+"_prim"}
                // onClick={handleClick}
                //  onPointerOver={(event) => hover(true)}
                // onPointerOut={(event) => hover(false)}

                material={mat("primary")}
                geometry={nodes.primary.geometry}
                // receiveShadow = {true}
                // castShadow = {true}
            />

            <mesh
                ref={model}
                name={name+"_secondary"}
                key = {name+"_sec"}
                material={mat("secondary")}
                geometry={nodes.secondary.geometry}
                // receiveShadow = {true}
                // castShadow = {true}
            />
            </>
        )

}
