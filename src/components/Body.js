import React, {useState} from "react" 

import Nav from "./Nav"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"

const Body = () => {

  return(
  <div>
    <Nav/>
    <main>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  </div>
  )
}

//<button onClick={topFunction()} id="myBtn" title="Go to top">Top</button>

export default Body