
const Resume = () =>{
  const otherSkills_1 = ["Agile Development", "Kanban"]
  const otherSkills_2 = ["Root-cause Analysis", "Effective Communicatior"]
  const otherSkills_3 = ["Team Player", "Quick Learner"]

  return(
    <section className="skillsSection" id="skillsSection">
      <div className="sectionContainer">
        <div className="sectionTitle">Resume</div>
        <div className="skillsGrid">
          <div className="expGridTitle largeFont bold">Languages/Technologies</div>
          <p className="underline devSkillsLineTitle-1">Most at Home with:</p>
          <div className="leftContainer">
            

            <div className="devSkillsLine-1 smallFont">
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
          <p className="underline devSkillsLineTitle-2">Proficient with:</p>
          <div className="rightContainer">
            
              <div className="devSkillsLine-2 smallFont">
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
          <div className="expGridTitle largeFont bold">Professional Experience</div>
          <div className="expFlex">
            <div className="leftContainer">
              <div className="underline largeFont expTitle">Web Development</div>
              
            </div>
            <div className="line"></div>
            <div className="rightContainer">
              <div className="underline largeFont expTitle">Mechanical Engineering</div>
              
              <div className="currentExpFlex">
                <img src="exp-img/toyota.svg" id="toyotaLogo"/>
                <div className="alignLeft">
                  <div>Manufacturing Engineer</div>
                  <div className="smallFont">
                    <span className="webText">Products: Toyota RAV4/Lexus RX350</span>
                    <span className="mobileText">Toyota RAV4/Lexus RX350</span>
                  </div>
                  <div className="smallFont">2018 - Present (Fulltime)</div>
                </div>
              </div>
              <div className=""><i>Previous positions at: </i></div>
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

export default Resume