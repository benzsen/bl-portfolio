
const Nav = () =>{
  const scrollTo = (sectionId) => document.getElementById(sectionId).scrollIntoView(true)
  
  const navLinkHighlight = () => {
    const navHome = document.querySelector(".navHome")
    const navAbout = document.querySelector(".navAbout")
    const navSkills = document.querySelector(".navSkills")
    const navProjects = document.querySelector(".navProjects")
    const navContact = document.querySelector(".navContact") 

    const homeSection = document.querySelector('#homeSection');
    const aboutSection = document.querySelector('#aboutSection');
    const skillsSection = document.querySelector('#skillsSection');
    const projectSection = document.querySelector('#projectSection');

    let otherNavLink = []

    if(homeSection.getBoundingClientRect().top <= 100 && homeSection.getBoundingClientRect().top >= -100){
      navHome.classList.add('navLinkAtScroll');
      otherNavLink = [navAbout, navSkills, navProjects, navContact]
    }
    if(aboutSection.getBoundingClientRect().top <= 100 && aboutSection.getBoundingClientRect().top >= -100){
      navAbout.classList.add('navLinkAtScroll');
      otherNavLink = [navHome, navSkills, navProjects, navContact]
    }
    if(skillsSection.getBoundingClientRect().top <= 100 && skillsSection.getBoundingClientRect().top >= -100){
      navSkills.classList.add('navLinkAtScroll');
      otherNavLink = [navHome, navAbout, navProjects, navContact]
    }
    if(projectSection.getBoundingClientRect().top <= 100 && projectSection.getBoundingClientRect().top >= -100){
      navProjects.classList.add('navLinkAtScroll');
      otherNavLink = [navHome, navAbout, navSkills, navContact]
    }
    if ((window.innerHeight + window.scrollY + 10) >= document.body.offsetHeight){
      navContact.classList.add('navLinkAtScroll');
      otherNavLink = [navHome, navAbout, navSkills, navProjects]
    }
    otherNavLink.forEach(link => link.classList.remove('navLinkAtScroll'))
  }

  document.addEventListener("scroll", navLinkHighlight)

  return(
    <nav className="webNav">
      <div className="navPicContainer">
        <img id="navPic" src="benny-img/bl_portrait_3.jpg"/>
      </div>
      <div className="xLargeFont xBold">Benny Luo</div>
      <div className="contactFlex">
        <div className="navSvgContainer"><a href="https://www.linkedin.com/in/luobenny/" target="_blank"><img src="contact-img/linkedin.svg" id="linkedin"/></a></div>
        <div className="navSvgContainer"><a href="https://github.com/benzsen" target="_blank"><img src="contact-img/github.svg" id="github"/></a></div>
        <div className="navSvgContainer"><a href="mailto:bennyluo95@gmail.com"><img src="contact-img/email.svg" id="email"/></a></div>
      </div>
      <div className="navLinkFlex">
        <a onClick={()=>scrollTo("homeSection")}><div className="navLink navHome"><img src="nav-link-img/home.svg"/><span>Home</span></div></a>
        <a onClick={()=>scrollTo("aboutSection")}><div className="navLink navAbout"><img src="nav-link-img/person.svg"/><span>About</span></div></a>
        <a onClick={()=>scrollTo("skillsSection")}><div className="navLink navSkills"><img src="nav-link-img/document-2-lines.svg"/><span>Resume</span></div></a>
        <a onClick={()=>scrollTo("projectSection")}><div className="navLink navProjects"><img src="nav-link-img/code-square.svg"/><span>Projects</span></div></a>
        <a onClick={()=>scrollTo("contactSection")}><div className="navLink navContact"><img src="nav-link-img/phone-book.svg"/><span>Contact</span></div></a>
      </div>
    </nav>
  )
}

export default Nav