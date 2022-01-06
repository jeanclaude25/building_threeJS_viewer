import React from 'react'
import { LoadingPageStyles, textStyles, svgStyles } from "./styles"
import './styles/index.scss'

export const LoadingPage = () => {
    return (
        <LoadingPageStyles>
            

            <svg viewBox="0 0 800 600">
  <symbol id="s-text">
    <text text-anchor="middle"
          x="50%"
          y="35%"
          class="text--line"
          >
      Building
    </text>
    <text text-anchor="middle"
          x="50%"
          y="68%"
          class="text--line2"
          >
      EXP
    </text>
    
  </symbol>
  
  <g class="g-ants">
    <use xlinkHref="#s-text"
      class="text-copy"></use>     
    <use xlinkHref="#s-text"
      class="text-copy"></use>     
    <use xlinkHref="#s-text"
      class="text-copy"></use>     
    <use xlinkHref="#s-text"
      class="text-copy"></use>     
    <use xlinkHref="#s-text"
      class="text-copy"></use>     
  </g>
  
  
</svg>


        </LoadingPageStyles>
    )
}
