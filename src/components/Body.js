import React, {useState} from "react" 

const Body = () => {

  return(
  <div>
    <section className="mainSection">
      <div>
        <h1>Hi! I'm Benny</h1>
        <p>I am a web developer, engineer and problem solver.</p>
        <img id="profilePic" src="./bl_photo_lake.jpg" width="300"></img>
      </div>
    </section>
    <section className="aboutSection">
      <div className="aboutFlex">
        <img id="profilePic" src="./bl_photo(cropped).jpg" width="300"></img>
        <div className="aboutText">
          <h3>About Me</h3>
          <p>
            I am a web developer with a background in mechanical engineering.
            <br/>
            My passion to build things with the purpose of solving problems sparked my curiosity to venture into software engineering.
            Through my self-teaching journey, I fell in love with web development.
          </p>
          <p>Coming from the automotive industry (Toyota/Tesla), I am eager to bring a new perspective and a root-cause analysis mindset for troubleshooting and building clean code.</p>
          <p>During my free time, I love playing PC co-op games, 3D printing and learning how to cook new recipes.</p>
        </div>
      </div>
    </section>
    <section className="portfolioSection">
      <h3>Projects</h3>
      <div className="ProjectFlex">
        <img src="./alphaType_render.png" width="300px"></img>
        <div className="projectDiv">
          <h4>alphaType</h4>
          <div>
            <span>This game will challenge you against the fastest alphabet typers in the world</span>
            <br/>
            <span>Sign up and see how your typing speed compares to others!</span>
            <p>Javascript, HTML, CSS, MERN (MongoDB, Express, React, Node)</p>
          </div>
        </div>
      </div>
      <div className="ProjectFlex">
        <img src="./MKCharts_render.png"></img>
        <div className="projectDiv">
          <h4>MKCharts</h4>
          <div>
            <span>This app allows user to input Mario Kart scores between my roomates and I</span>
            <br/>
            <span>Due to the competitive nature between my roomates and I, we needed a reliable tool to track our scores after each game.</span>
            <p>Javascript, HTML, CSS, MERN (MongoDB, Express, React, Node) </p>
          </div>
        </div>
      </div>
      <div className="expDiv">
        <h3>Experience</h3>
        <div className="devExp"></div>
      </div>
    </section>
    <section className="skillsSection">
      <div>
        <h3>Skills</h3>
        <p>React</p>
        <p>MongoDB</p>
        <p>Express</p>
        <p>NodeJS</p>
        <p>Javascript, </p>
      </div>
    </section>
    <section className="contactSection">
      <div>
        <h3>Contact Me</h3>
        <p>LinkedIn</p>
        <p>Github</p>
        <p>Email</p>
        <p>Phone</p>
      </div>
    </section>
    <div className="buttonFlex">Buttons</div>

  </div>
  )
}

export default Body