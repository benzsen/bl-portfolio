import React, {useState} from "react" 
import Intro from "./Intro"
import About from "./About"
import Portfolio from "./Portfolio"
import Skills from "./Skills"
import Contact from "./Contact"

const Body = () => {

  return(
  <div>
    <Intro/>
    <About/>
    <Portfolio/>
    <Skills/>
    <Contact/>
  </div>
  )
}

export default Body