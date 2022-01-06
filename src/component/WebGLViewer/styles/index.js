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
`