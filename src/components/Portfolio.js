

const Portfolio = () =>{

  return(
    <section className="portfolioSection">
      <h3>Projects</h3>
      <div className="ProjectFlex">
        <img src="./alphaType_render.png"></img>
        <div className="projectDiv">
          <div className="appHeading">
            <span className="appTitle">alphaType</span> 
            <div>Javascript, HTML, CSS, MERN (MongoDB, Express, React, Node)</div>
          </div>  
          <div>
            <span>This game will challenge you against the fastest alphabet typers in the world</span>
            <br/>
            <span>Sign up and see how your typing speed compares to others!</span>
            
          </div>
        </div>
      </div>
      <div className="ProjectFlex">
        <img src="./MKCharts_render.png"></img>
        <div className="projectDiv">
          <div className="appHeading">
            <span className="appTitle">MKCharts</span> 
            <div>Javascript, HTML, CSS, MERN (MongoDB, Express, React, Node)</div>
          </div>
          <div>
            <span>This app allows user to input Mario Kart scores between my roomates and I</span>
            <br/>
            <span>Due to the competitive nature between my roomates and I, we needed a reliable tool to track our scores after each game.</span>
            
          </div>
        </div>
      </div>
      <h3>Experience</h3>
      <div className="expFlex">
        <div className="devExp">
          Freelance
        </div>
        <div className="mechExp">
          Fulltime
          Internshipd
        </div>
      </div>
    </section>
  )
}

export default Portfolio