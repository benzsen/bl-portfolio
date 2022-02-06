
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Container from 'react-bootstrap/Container'

const MobileNav = () => {

  const scrollTo = (sectionId) => document.getElementById(sectionId).scrollIntoView(true)

  const showNavButton = () => {
    const navBtn = document.getElementById("navButton");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      navBtn.style.visibility = "visible";
      navBtn.style.opacity= 1;
    } else {
      navBtn.style.visibility = "hidden";
      navBtn.style.opacity= 0;
    }
  }

  document.addEventListener("scroll", showNavButton)

  return(
    <Navbar bg="light" expand={false} id="navButton">
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <a onClick={()=>scrollTo("homeSection")}><div className="navLink navHome"><img src="nav-link-img/home.svg"/><span>Home</span></div></a>
              <a onClick={()=>scrollTo("aboutSection")}><div className="navLink navAbout"><img src="nav-link-img/person.svg"/><span>About</span></div></a>
              <a onClick={()=>scrollTo("skillsSection")}><div className="navLink navSkills"><img src="nav-link-img/document-2-lines.svg"/><span>Resume</span></div></a>
              <a onClick={()=>scrollTo("projectSection")}><div className="navLink navProjects"><img src="nav-link-img/code-square.svg"/><span>Projects</span></div></a>
              <a onClick={()=>scrollTo("contactSection")}><div className="navLink navContact"><img src="nav-link-img/phone-book.svg"/><span>Contact</span></div></a>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default MobileNav