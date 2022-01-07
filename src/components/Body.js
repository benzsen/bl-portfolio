import React, {useState} from "react" 

const Body = () => {

  return(
  <div>
    <section className="mainSection">
      <div>
        <h1>Hi! I'm Benny</h1>
        <p>I am a web developer, engineer and problem solver.</p>
        <div>
          <img id="profilePic" src="./bl_photo(cropped).jpg" width="300"></img>
        </div>
      </div>
    </section>
    <section className="aboutSection">
      <div className="aboutText">
        <h3>About Me</h3>
        <p>
            I am a web developer with a background in mechanical engineering. 
          <br/>
            My passion to build things with the purpose of solving problems sparked my curiosity to venture into software engineering.
          <br/>
            Through my self-teaching journey, I fell in love with web development. 
        </p>
        <p>Coming from the automotive industry (Toyota/Tesla), I am eager to bring a new perspective and a root-cause analysis mindset for troubleshooting and building clean code.</p>
        <p>During my free time, I love playing PC co-op games, 3D printing and learning how to cook new recipes!</p>
        <p></p>
        <div>ProfilePic2</div>
      </div>
    </section>
    <section className="projetsSection">
      <h3>Projects</h3>
      <div>
        <h4>alphaType</h4>
        <span>This game will challenge you against the fastest alphabet typers in the world</span>
        <br/>
        <span>Sign up and see how your typing speed compares to others!</span>
        <p>Javascript, HTML, CSS</p>
        <p>MERN (MongoDB, Express, React, Node) </p>
      </div>
      <div>
        <h4>MKCharts</h4>
        <span>This app was made to track Mario Kart scores between my roomates and I</span>
        <br/>
        <span>My roomates and I were very competitive Mario Kart 8 players</span>
        <br/>
        <span>(PS- Mario Kart Settings: 4 races, Hard PCs, Frantic Items, Random Tracks)</span>
        
        <p>Javascript, HTML, CSS</p>
        <p>MERN (MongoDB, Express, React, Node) </p>
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