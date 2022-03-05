import React, {useState} from "react" 

import Nav from "./Nav"
import About from "./About"
import Resume from "./Resume"
import Projects from "./Projects"
import Contact from "./Contact"
import TopBtn from "./TopBtn"
import MobileNav from "./MobileNav"

const Body = () => {

  const email = "bennyluodev@gmail.com"
  const linkedin = "https://linkedin.com/in/luobenny"
  const github = "https://github.com/benzsen"

  return(
  <div>
    <Nav
      email = {email}
      linkedin = {linkedin}
      github = {github}
    />
    <main>
      <MobileNav/>
      <About/>
      <Resume/>
      <Projects/>
      <Contact
        email = {email}
        linkedin = {linkedin}
        github = {github}
      />
      <TopBtn/>
    </main>
  </div>
  )
}

export default Body