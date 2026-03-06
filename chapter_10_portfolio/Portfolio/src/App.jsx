import { About } from "./components/About/about"
import { Footer } from "./components/footer/footer"
import { Hero } from "./components/hero/hero"
import { Navbar } from "./components/navbar/nav"
import { Project } from "./components/project/project"
import { Skills } from "./components/skills/skills"


export const App = () => {
  return <>
    <Navbar/>
    <Hero/> 
    <About/>
    <Skills/>
    <Project/>
    <Footer/>
  </>
}