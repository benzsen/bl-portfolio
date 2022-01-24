//<div className="navSvgContainer"><a href="https://github.com/benzsen" target="_blank" id="github"><img src="github.svg"/></a></div>
//<a onClick={()=>scrollTo("expSection")}><div className="navLink navExp"><img src="/nav-pics/document-2-lines.svg"/>Experience</div></a>
const Nav = () =>{
  const scrollTo = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView(true)
  }

  document.onscroll = () => {
    const navHome = document.querySelector(".navHome")
    const navAbout = document.querySelector(".navAbout")
    const navSkills = document.querySelector(".navSkills")
    const navProjects = document.querySelector(".navProjects")
    const navExp = document.querySelector(".navExp")
    const navContact = document.querySelector(".navContact") 

    const homeSection = document.querySelector('#homeSection');
    const aboutSection = document.querySelector('#aboutSection');
    const skillsSection = document.querySelector('#skillsSection');
    const projectSection = document.querySelector('#projectSection');
    const expSection = document.querySelector('#expSection');
    const contactSection = document.querySelector('#contactSection');

    console.log("bottom", contactSection.getBoundingClientRect().bottom );
    

    if(homeSection.getBoundingClientRect().top <= 100 && homeSection.getBoundingClientRect().top >= -100){
      navHome.classList.add('navLinkAtScroll');

      let otherNavLink = [navAbout, navSkills, navProjects, navExp, navContact]
      otherNavLink.forEach(link => link.classList.remove('navLinkAtScroll'))
    }
    else if(aboutSection.getBoundingClientRect().top <= 100 && aboutSection.getBoundingClientRect().top >= -100){
      navAbout.classList.add('navLinkAtScroll');

      let otherNavLink = [navHome, navSkills, navProjects, navExp, navContact]
      otherNavLink.forEach(link => link.classList.remove('navLinkAtScroll'))
    }
    else if(skillsSection.getBoundingClientRect().top <= 100 && skillsSection.getBoundingClientRect().top >= -100){
      navSkills.classList.add('navLinkAtScroll');

      let otherNavLink = [navAbout, navHome, navProjects, navExp, navContact]
      otherNavLink.forEach(link => link.classList.remove('navLinkAtScroll'))
    }
    else if(projectSection.getBoundingClientRect().top <= 100 && projectSection.getBoundingClientRect().top >= -100){
      navProjects.classList.add('navLinkAtScroll');
      // console.log("project")
      let otherNavLink = [navAbout, navHome, navSkills, navExp, navContact]
      otherNavLink.forEach(link => link.classList.remove('navLinkAtScroll'))
    }
    else if(contactSection.getBoundingClientRect().bottom <= 100 && contactSection.getBoundingClientRect().bottom >= -100){
      navContact.classList.add('navLinkAtScroll');

      let otherNavLink = [navAbout, navHome, navSkills, navProjects, navExp]
      otherNavLink.forEach(link => link.classList.remove('navLinkAtScroll'))
    }
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
        <a onClick={()=>scrollTo("homeSection")}><div className="navLink navHome"><img src="/nav-pics/home.svg"/>Home</div></a>
        <a onClick={()=>scrollTo("aboutSection")}><div className="navLink navAbout"><img src="/nav-pics/person.svg"/>About</div></a>
        <a onClick={()=>scrollTo("skillsSection")}><div className="navLink navSkills"><img src="/nav-pics/document-2-lines.svg"/>Resume</div></a>
        <a onClick={()=>scrollTo("projectSection")}><div className="navLink navProjects"><img src="/nav-pics/code-square.svg"/>Projects</div></a>
        <a onClick={()=>scrollTo("contactSection")}><div className="navLink navContact"><img src="/nav-pics/phone-book.svg"/>Contact</div></a>
      </div>
    </nav>
  )
}

export default Nav