import Navbar from "./Navbar"
import Home from "./templates/Home"
import About from "./templates/About"
import Projects from "./templates/Projects"
import { Route, Routes } from "react-router"

function App() {
    
    return (
        <>
            <Navbar />

            <div className="container"> 
            
                <Routes> 
                    <Route path="/" element={ <Home />} />
                    <Route path="/projects" element={ <Projects />} />
                    <Route path="/about" element={ <About />} />
                </Routes>

            </div>

        </>
    )
}

export default App