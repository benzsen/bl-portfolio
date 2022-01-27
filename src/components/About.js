
const About = () =>{

  return(
    <section className="aboutSection whiteBackgroud" id="homeSection">
        <div className="sectionContainer">
          <div className="introFlex">
            <p className="hugeFont">Hey! I'm Benny.</p>
            <p className="xLargeFont">
              <span className="webText">Web Developer | Engineer | Problem Solver</span>
              <span className="mobileText">
                <div>Web Developer</div>
                <div> Engineer | Problem Solver</div>
              </span>
            </p>
            <img id="profilePic" src="benny-img/bl_photo(cropped).jpg"></img>
          </div>
          <div className="aboutContainer" id="aboutSection">
          <div className="sectionTitle">About Me</div>
            <div className="aboutText">
              <p>
                I am a web developer with a background in mechanical engineering.
              </p>
              <p>
                My passion to build things with the purpose of solving problems sparked my curiosity to venture into software engineering.
                <br/>
                Through my self-teaching journey, I fell in love with web development.
              </p>
              <p>Coming from the automotive industry (Toyota/Tesla), I am eager to bring a fresh perspective and a root-cause analysis mindset for troubleshooting and building clean code.</p>
              <p className="noBottomMargin">During my free time, I love playing co-op games, 3D printing and learning how to cook new recipes.</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About