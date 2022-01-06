import styled from "styled-components"
import { config } from "../../WebGLViewer/config"

export const HStyle = styled.h1`
    color: ${config.html.color.text} ;
    margin-left:80px;
    text-align: left;
    pointer-events:none;
    font-size: calc(10px + 5vmin);
`

export const ParagraphStyle = styled.div`
    width: 40%;
    max-width:30em;
    color: ${config.html.color.text} ;
    top:50%;
    left:50px;
    text-align: justify;
    text-justify: inter-word;
    position: absolute;
    z-index: 10;
    pointer-events:none;
`