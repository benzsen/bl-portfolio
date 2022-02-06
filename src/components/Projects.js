import Badge from 'react-bootstrap/Badge'

const Projects = () =>{

  const alphaTypeSkills = ["React", "Node", "Express", "Mongo", "Redux"]
  const MKChartsSkills = ["React", "Node", "Express", "Mongo"]

  return(
    <section className="portfolioSection whiteBackgroud" id="projectSection"> 
      <div className="sectionContainer">
        <div className="sectionTitle">Projects</div>
        <div className='allProjectsContainer'>
          <div className="projectFlex">
            <div className="projectImg" id="alphaTypeImg">
              <a href="https://alpha-type.herokuapp.com/" target="_blank"><img src="projects-img/alphaType_render.png"/></a>
            </div>
            <div className="projectTitle bold">
              <a href="https://alpha-type.herokuapp.com/" target="_blank">alphaType <Badge bg="secondary" id="highlightBadge">Highlight Project</Badge></a>
            </div>
            <div className="projectSkills smallFont bold">{alphaTypeSkills.map(s => <div className="projectSkillTile">{s}</div>)}</div>
            <div className="projectDiv">
              <div className="projectText">
                <div>This fullstack web app will challenge you to type the alphabet under the pressure of time.</div>
                <div>Sign up and compete against the fastest alphabet typers in the world!</div>
              </div>
            </div>
            <div className="smallFont projectDisclaimer webText"><i>* Page load time may vary due to Heroku's dyno sleeping.</i></div>
            <div className="smallFont projectDisclaimer mobileText"><i>*Heroku dyno sleeping may affect load time.</i></div>
          </div>
          <div className="projectFlex">
            <div className="projectImg" id="MKChartsImg">
              <a href="https://mkcharts.herokuapp.com/" target="_blank"><img src="projects-img/MKCharts_render.png"/></a>
            </div>
            <div className="projectTitle bold">
              <a href="https://mkcharts.herokuapp.com/" target="_blank">MKCharts</a>
            </div>
            <div className="projectSkills smallFont bold">{MKChartsSkills.map(s => <div className="projectSkillTile">{s}</div>)}</div>
            <div className="projectDiv">
              <div className="projectText">
                <div>This app allows user to input Mario Kart scores between my roomates and I</div>
                <div>Due to the competitive nature between my roomates and I, we needed a reliable tool to track our scores after each game.</div>
              </div>
            </div>
            <div className="smallFont projectDisclaimer webText"><i>* Page load time may vary due to Heroku's dyno sleeping.</i></div>
            <div className="smallFont projectDisclaimer mobileText"><i>*Heroku dyno sleeping may affect load time.</i></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects