import { LoadingPage } from './component/LoadingPage/LoadingPage'
import { Header } from './component/Header/Header'
import { WebGLViewer } from './component/WebGLViewer/WebGLViewer'
import { Footer } from './component/Footer/Footer'
import { Paragraph } from './component/Paragraph/Paragraph'

function App() {
  return (
    <div className="App">
      <LoadingPage/>
            <Header/>
            <Paragraph/>
            <WebGLViewer/>
            <Footer/>
    </div>
  )
}

export default App