//<div className="navSvgContainer"><a href="https://github.com/benzsen" target="_blank" id="github"><img src="github.svg"/></a></div>

const Nav = () =>{
  const scrollTo = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView(true)
  }

  return(
    <nav>
      <div className="navPicContainer">
        <img id="navPic" src="bl_photo(cropped).jpg"/>
      </div>
      <div className="largeFont bold">Benny Luo</div>
      <div className="contactFlex">
        <div className="navSvgContainer"><a href="https://www.linkedin.com/in/luobenny/" target="_blank"><img src="linkedin.svg" id="linkedin"/></a></div>
        <div className="navSvgContainer"><a href="https://github.com/benzsen" target="_blank"><img src="github.svg" id="github"/></a></div>
        <div className="navSvgContainer"><a href="mailto:bennyluo95@gmail.com"><img src="email.svg" id="email"/></a></div>
      </div>
      <div className="navLinkFlex">
        <div className="navLink"><a onClick={()=>scrollTo("home")}>Home</a></div>
        <div className="navLink"><a onClick={()=>scrollTo("aboutSection")}>About</a></div>
        <div className="navLink"><a onClick={()=>scrollTo("skillsSection")}>Skills</a></div>
        <div className="navLink"><a onClick={()=>scrollTo("projectSection")}>Projects</a></div>
        <div className="navLink"><a onClick={()=>scrollTo("expSection")}>Experience</a></div>
        <div className="navLink"><a onClick={()=>scrollTo("contactSection")}>Contact</a></div>
      </div>
    </nav>
  )
}

export default Nav