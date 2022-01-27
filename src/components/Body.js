import React, {useState} from "react" 

import Nav from "./Nav"
import About from "./About"
import Resume from "./Resume"
import Projects from "./Projects"
import Contact from "./Contact"
import TopBtn from "./TopBtn.js"

const Body = () => {

  return(
  <div>
    <Nav/>
    <main>
      <About/>
      <Resume/>
      <Projects/>
      <Contact/>
      <TopBtn/>
    </main>
  </div>
  )
}

export default Body