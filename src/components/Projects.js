import Badge from 'react-bootstrap/Badge'

const Projects = () =>{

  const alphaTypeSkills = ["React", "Node.js", "Express", "MongoDB", "Redux"]
  const portfolioSkills = ["React", "HTML", "SASS", "JavaScript", "DOM"]

  return(
    <section className="portfolioSection whiteBackgroud" id="projectSection"> 
      <div className="sectionContainer">
        <h2 className="sectionTitle">Projects</h2>
        <div className='allProjectsContainer'>
          <div className="projectFlex">
            <div className="projectImg" id="alphaTypeImg">
              <a href="https://alpha-type.herokuapp.com/" target="_blank" rel="noreferrer"><img src="projects-img/alphaType_banner.png" alt="alphaType Project Banner"/></a>
            </div>
            <div className="projectTitle">
              <a href="https://alpha-type.herokuapp.com/" target="_blank" rel="noreferrer"><span className="bold">alphaType</span></a> 
              
              <a href="https://github.com/orgs/alphaType-benny/repositories" target="_blank" rel="noreferrer"><img src="contact-img/github.svg" id="github" alt="Github Logo"/></a>
              <Badge bg="secondary" id="highlightBadge">
              <span className="webText">Highlight Project</span>
              <span className="mobileText">Highlight</span>
              </Badge>
            </div>
            <div className="projectSkills smallFont">{alphaTypeSkills.map(s => <div className="projectSkillTile">{s}</div>)}</div>
            <div className="projectDiv">
              <div className="projectText">
                <div>This full stack MERN web app will challenge you to type the alphabet under the pressure of time.</div>
                <div>Sign up and compete against the fastest alphabet typers in the world!</div>
              </div>
            </div>
            <div className="smallFont projectDisclaimer webText"><i>* Page load time may vary due to Heroku's dyno sleeping.</i></div>
            <div className="smallFont projectDisclaimer mobileText"><i>*Heroku dyno sleeping may affect load time.</i></div>
          </div>
          <div className="projectFlex">
            <div className="projectImg" id="portfolioMetaImg">
              <img src="projects-img/bl_portfolio_meta_tags1.png" id="projectImgBkgd" alt="Benny's Portfolio Preview Background"/>
              <img src="projects-img/bl_portfolio_meta_tags1.png" alt="Benny's Portfolio Meta Tag Preview"/>
            </div>
            <div className="projectTitle bold">
              <span>This Portfolio</span>
              <a href="https://github.com/benzsen/bl-portfolio" target="_blank" rel="noreferrer"><img src="contact-img/github.svg" id="github" alt="Github Logo"/></a>
            </div>
            <div className="projectSkills smallFont">{portfolioSkills.map(s => <div className="projectSkillTile">{s}</div>)}</div>
            <div className="projectDiv">
              <div className="projectText">
                <div>This responsive portfolio was created using React.</div>
                <div>Website is hosted through Netlify.</div>
                <div>SSL Certificate provided through Let's Encrypt.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects