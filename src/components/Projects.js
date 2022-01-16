

const Projects = () =>{

  return(
    <section className="portfolioSection" id="portfolioSection"> 
      <div className="sectionTitle">Projects</div>
      <div className="projectFlex">
        <div className="projectImg">
          <a href="https://alpha-type.herokuapp.com/" target="_blank"><img src="./alphaType_render.PNG"/></a>
        </div>
        <div className="projectDiv">
          <div className="appHeading">
            <span className="appTitle">
              <a href="https://alpha-type.herokuapp.com/" target="_blank">alphaType</a>
            </span> 
            <div>Javascript, HTML, CSS, MERN (MongoDB, Express, React, Node)</div>
          </div>  
          <div>
            <span>This game will challenge you against the fastest alphabet typers in the world</span>
            <br/>
            <span>Sign up and see how your typing speed compares to others!</span>
            
          </div>
        </div>
      </div>
      <div className="projectFlex">
        <div className="projectImg">
          <a href="https://mkcharts.herokuapp.com/" target="_blank"><img src="./MKCharts_render.PNG"/></a>
        </div>
        <div className="projectDiv">
          <div className="appHeading">
            <span className="appTitle">
              <a href="https://mkcharts.herokuapp.com/" target="_blank">MKCharts</a>
            </span> 
            <div>Javascript, HTML, CSS, MERN (MongoDB, Express, React, Node)</div>
          </div>
          <div>
            <span>This app allows user to input Mario Kart scores between my roomates and I</span>
            <br/>
            <span>Due to the competitive nature between my roomates and I, we needed a reliable tool to track our scores after each game.</span>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Projects