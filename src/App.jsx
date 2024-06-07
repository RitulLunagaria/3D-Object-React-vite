import { Route,BrowserRouter as Router ,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import {Home ,Projects,About,Contact} from "./pages/index"
function App() {


  return (
    <>
      <main className='bg-gradient-to-b from-cyan-300/20 to-cyan-500/20 '>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>

        </Routes>
      </Router>
      </main>
    </>
  )
}

export default App
