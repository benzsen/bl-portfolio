
const About = () =>{

  return(
    <section className="aboutSection">
      <div className="introFlex">
        <img id="profilePic" src="./bl_photo_lake.jpg"/>
        <div>
          <p className="hugeFont">Hey! I'm Benny.</p>
          <p className="xLargeFont">Web Developer | Engineer | Problem Solver</p>
        </div>
      </div>
      <div className="aboutFlex">
        <img id="profilePic" src="./bl_photo(cropped).jpg"></img>
        <div className="aboutText">
          <h3>About Me</h3>
          <p>
            I am a web developer with a background in mechanical engineering.
          </p>
          <p>
            My passion to build things with the purpose of solving problems sparked my curiosity to venture into software engineering.
            Through my self-teaching journey, I fell in love with web development.
          </p>
          <p>Coming from the automotive industry (Toyota/Tesla), I am eager to bring a new perspective and a root-cause analysis mindset for troubleshooting and building clean code.</p>
          <p>During my free time, I love playing PC co-op games, 3D printing and learning how to cook new recipes.</p>
        </div>
      </div>
      <div>
        <h3>Languages and Technologies I know</h3>
        
      </div>
    </section>
  )
}

export default About