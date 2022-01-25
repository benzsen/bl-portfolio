
const Skills = () =>{
  const otherSkills_1 = ["Agile Development", "Project Management"]
  const otherSkills_2 = ["Root-cause Analysis", "Effective Communicatior"]
  const otherSkills_3 = ["Team Player", "Quick Learner"]

  return(
    <section className="skillsSection" id="skillsSection">
      <div className="sectionContainer">
        <div className="sectionTitle">Resume</div>
        <div className="skillsGrid">
          <div className="expGridTitle largeFont bold">Languages/Technologies</div>

          <div className="leftContainer">
            <p className="underline">Most at Home with:</p>

            <div className="devSkillsLine-1">
              <img src="skills-img/mongodb-logo.png"/>
              <img src="skills-img/express-logo.png"/>
              <img src="skills-img/react-logo.png"/>
              <img src="skills-img/nodejs-logo.png"/>
              <div>Mongodb</div>
              <div>Express</div>
              <div>React</div>
              <div>Node.js</div>
            </div>
          </div>

          <div className="rightContainer">
            <p className="underline">Proficient with:</p>
              <div className="devSkillsLine-2">
                <img src="skills-img/logo-javascript.svg"/> 
                <img src="skills-img/html-1.svg"/>
                <img src="skills-img/css-3.svg"/>
                <img src="skills-img/sass-1.svg"/>
                <img src="skills-img/shopify.svg"/>
                <div>JS</div>
                <div>HTML</div>
                <div>CSS</div>
                <div>SASS</div>
                <div>Liquid</div>
                <img src="skills-img/redux.svg"/>
                <img src="skills-img/jest-2.svg"/>
                <img src="skills-img/cypress.png"/>
                <img src="skills-img/git-icon.svg"/>
                <img src="skills-img/postman.svg"/>
                <div>Redux</div>
                <div>Jest</div>
                <div>Cypress</div>
                <div>Git</div>
                <div>Postman</div>
              </div>
          </div>

          <div className="underline expGridTitle largeFont bold">Other Skills</div>

          <div className="bottomContainer">
            <div className="otherSkillsFlex">{otherSkills_1.map(s => <div className="otherSkillTile">{s}</div>)}</div>
            <div className="otherSkillsFlex">{otherSkills_2.map(s => <div className="otherSkillTile">{s}</div>)}</div>
            <div className="otherSkillsFlex">{otherSkills_3.map(s => <div className="otherSkillTile">{s}</div>)}</div>
          </div>
        </div>
      
        <div className="expContainer">
          <div className="expGridTitle largeFont bold">Experience</div>
          <div className="expFlex">
            <div className="leftContainer">
              <div className="largeFont">Web Development</div>
              <p className="underline bold">Freelance</p>
            </div>
            <div className="line"></div>
            <div className="rightContainer">
              <div className="largeFont">Mechanical Engineering</div>
              <p className="underline bold">Current Role</p>
              <div className="currentExpFlex">
                <img src="exp-img/toyota.svg" id="toyotaLogo"/>
                <div className="alignLeft">
                  <div>Manufacturing Engineer</div>
                  <div className="smallFont">Products: Toyota RAV4/Lexus RX350</div>
                  <div className="smallFont">2018 - Present</div>
                </div>
              </div>
              <p className="underline bold">Other Experience</p>
              <div className="otherExpFlex">
                <span className="expLogoContainer">
                  <img src="exp-img/university-of-waterloo.svg" id="uwLogo"/>
                </span>
                <span className="expLogoContainer">
                  <img src="exp-img/canada-3.svg" id="canadaLogo"/>
                </span>
                <span className="expLogoContainer">
                  <img src="exp-img/tesla-motors-1.svg" id="teslaLogo"/>
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills