import React, {useState} from "react" 

import Nav from "./Nav"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Experience from "./Experience"
import Contact from "./Contact"

const Body = () => {

  return(
  <div>
    <About/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Contact/>
  </div>
  )
}

export default Body