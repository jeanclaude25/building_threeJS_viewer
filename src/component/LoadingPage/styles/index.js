import styled , {keyframes} from "styled-components"
import { config } from "../../WebGLViewer/config"

const loadingAnimation = keyframes`
 0% { opacity: 1; }
 99% {visibility: visible}
 100% { visibility: hidden; opacity: 0; }
`

export const LoadingPageStyles = styled.div`
    width: 100%;
    height: 100%;
    margin:0;
    position: fixed;
    padding:0;
    box-sizing: border-box;
    background-color: black;
    color: white;
    z-index:25;
    pointer-events: none;
    animation-name: ${loadingAnimation};
    animation-duration: 2s;
    animation-delay: 2.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
`