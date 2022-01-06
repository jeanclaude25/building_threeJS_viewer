import styled from "styled-components"
import { config } from "../../WebGLViewer/config"


export const HeaderStyle = styled.div`
    width: 100%;
    color: ${config.html.color.text} ;
    position: fixed;
    text-align: center;
    z-index: 10;
    pointer-events: none;
    background-color: ${config.html.color.secondary};
    font-size: 1.2em;
`