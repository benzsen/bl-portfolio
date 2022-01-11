

const Portfolio = () =>{

  return(
    <section className="portfolioSection">
      <h3>Projects</h3>
      <div className="projectFlex">
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
      <div className="projectFlex">
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
          <h3>Web Development</h3>
          <div>
            <p>Freelance</p>
          </div>
        </div>
        <div className="mechExp">
          <h3>Mechanical Engineering</h3>
          <div className="underline hugeFont">Fulltime</div>
          <div className="fulltimeFlex">
            
            <img src="toyota.svg"/>
            <div className="alignLeft smallFont">
              <p className="noTopMargin">Quality Engineering - Toyota RAV4<br/>2/2020 - Present</p>
              <p className="noTopMargin">Production Engineering - Lexus RX350<br/>9/2018 - 2/2020</p>
            </div>
          </div>
          <div className="underline hugeFont">Internships</div>
          <div className="internFlex">
            <div className="smallFont">
              <span className="imgContainer">
                <img src="canada-3.svg" id="canadaLogo"/>
              </span>
              2015
            </div>
            
            <div>
              <span className="imgContainer">
                <img src="toyota.svg" id="toyotaLogo"/>
              </span>
              2016
            </div>

            <div>
              <span className="imgContainer">
                <img src="tesla-motors-1.svg" id="teslaLogo"/>
              </span>
              2017
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio