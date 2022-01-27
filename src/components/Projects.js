import Badge from 'react-bootstrap/Badge'

const Projects = () =>{

  return(
    <section className="portfolioSection whiteBackgroud" id="projectSection"> 
      <div className="sectionContainer">
        <div className="sectionTitle">Projects</div>
        <div className="projectGrid">
        
        <div className="projectImg" id="alphaTypeImg">
          <a href="https://alpha-type.herokuapp.com/" target="_blank"><img src="projects-img/alphaType_render.png"/></a>
        </div>
        <div className="appHeading">
              <a href="https://alpha-type.herokuapp.com/" target="_blank">alphaType <Badge bg="secondary" id="highlightBadge">Highlight Project</Badge></a>
          </div>
        <div className="projectDiv">
          <div className="projectText">
            <div>This fullstack web app will challenge you to type the alphabet under the pressure of time.</div>
            <div>Sign up and compete against the fastest alphabet typers in the world!</div>
            <p>JS, HTML, CSS, MERN (MongoDB, Express, React, Node)</p>
          </div>
          </div>
          <div className="projectImg" id="MKChartsImg">
            <a href="https://mkcharts.herokuapp.com/" target="_blank"><img src="projects-img/MKCharts_render.png"/></a>
          </div>
          <div className="appHeading">
                <a href="https://mkcharts.herokuapp.com/" target="_blank">MKCharts</a>
            </div>
          <div className="projectDiv">
            <div className="projectText">
              <div>Javascript, HTML, CSS, MERN (MongoDB, Express, React, Node)</div>
              <div>This app allows user to input Mario Kart scores between my roomates and I</div>
              <div>Due to the competitive nature between my roomates and I, we needed a reliable tool to track our scores after each game.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects