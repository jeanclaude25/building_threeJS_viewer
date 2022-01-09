import styled from "styled-components"
import { config } from "../../WebGLViewer/config"

export const GlViewer = styled.div`
    width: 100%;
    height: 100vh;
    margin:0;
    position: fixed;
    padding:0;
    box-sizing: border-box;
    background-color: ${config.html.color.secondary};
    background-size: 45px 45px;
    background-image: radial-gradient(
        transparent 31px,
        rgba(255,255,255,0.6) 32px
    );
    background-repeat: repeat;
    cursor: none;
`

export const BigCircleStyles = styled.span`
    position: fixed;
    border: solid 1px #ccc;
    width: ${config.mouse.size}; 
    height: ${config.mouse.size}; 
    border-radius: 50%; 
    pointer-events: none;
    left:150px;
    mix-blend-mode: difference;
    z-index:50;
`

export const SmallCircleStyles = styled.span`
    position: fixed;
    border: solid 1px #ccc;
    width: 4px; 
    height: 4px; 
    border-radius: 50%; 
    pointer-events: none;
    background-color: #ccc;
    mix-blend-mode: difference;
    z-index:50;
`