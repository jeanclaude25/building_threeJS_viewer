import React, { Suspense, useState, useEffect } from "react";
import { Model } from "./Model";


export function LoadModels({onUpdate, objects}) {
  const [allPart, setAllPart] = useState(false)
  const [objectSelection, setObjectSelection] = useState(null)

 

  useEffect(() => {
    if(!allPart){setObjectSelection(null)}
  },[allPart]);

  return (
    <>
      {objects.map((data) => {
        return (
          <Suspense fallback={null}>
            
              
            <Model
              key = {data.name}
              name = {data.name}
              filepath = {data.filepath}
              onUpdate = {onUpdate}
              selection = {objectSelection}
            />
            
            </Suspense>
          
        );
      })}
    </>
  );
}
