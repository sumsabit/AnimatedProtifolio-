
import NavBar from "./component/NavBar";
import About from "./section/About";
import Contact from "./section/Contact";
import Hero from "./section/Hero";
import Projects from "./section/Projects";
import Skills from "./section/Skills";


function App() {
  return(
    <>
    <NavBar/>
     <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        </>
  )
}

export default App;