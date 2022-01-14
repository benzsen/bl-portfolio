

const Portfolio = () =>{

  return(
    <section className="portfolioSection" id="portfolioSection"> 
      <h2>Portfolio</h2>
      <h3>Projects</h3>
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
      <h3>Experience</h3>
      <div className="expFlex">
        <div className="devExp">
          <h3>Web Development</h3>
            <p className="underline">Freelance</p>
        </div>
        <div className="mechExp">
          <h3>Mechanical Engineering</h3>
          <div className="underline largeFont">Current Role</div>
          <div className="fulltimeFlex">
            <img src="toyota.svg" id="toyotaLogo"/>
            <div className="alignLeft smallFont">
              <p><span className="mediumFont">Manufacturing Engineer</span><br/>Products: Toyota RAV4/Lexus RX350<br/>2018 - Present</p>
            </div>
          </div>
          <div className="underline mediumFont">Other Experience</div>
          <div className="internFlex">
            <span className="imgContainer">
              <img src="university-of-waterloo.svg" id="uwLogo"/>
            </span>
            <span className="imgContainer">
              <img src="canada-3.svg" id="canadaLogo"/>
            </span>
            <span className="imgContainer">
              <img src="tesla-motors-1.svg" id="teslaLogo"/>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio