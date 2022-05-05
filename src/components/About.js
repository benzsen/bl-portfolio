
const About = () =>{

  return(
    <section className="aboutSection whiteBackgroud" id="homeSection">
        <div className="sectionContainer">
          <div className="introFlex">
            <h1>Hey! I'm Benny.</h1>
            <h2>
              <span className="webText">Software Developer | Engineer | Problem Solver</span>
              <span className="mobileText">
                <div>Software Developer</div>
                <div>Engineer | Problem Solver</div>
              </span>
            </h2>
            <img id="profilePic" alt="Benny Luo profile picture" src="benny-img/bl_portrait_1.png"></img>
          </div>
          <div className="aboutContainer" id="aboutSection">
          <h2 className="sectionTitle">About Me</h2>
            <div className="aboutText">
              <p>
                I am a web developer with a background in mechanical engineering.
              </p>
              <p>
                My passion to build things with the purpose of solving problems sparked my curiosity to venture into software engineering.
                <br/>
                Through my self-teaching journey, I fell in love with web development.
              </p>
              <p>Coming from the automotive industry (Toyota/Tesla), I am eager to bring a fresh perspective and a root-cause analysis mindset for troubleshooting and writting clean code.</p>
              <p className="noBottomMargin">During my free time, I love playing co-op games, 3D printing and learning how to cook new recipes.</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About