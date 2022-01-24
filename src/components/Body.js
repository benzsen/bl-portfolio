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
    <Nav/>
    <main>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
    </main>
  </div>
  )
}

export default Body