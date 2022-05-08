
const Resume = () =>{
  const otherSkills_2 = ["Agile Development", "Effective Communicator"]
  const otherSkills_1 = ["Data-Driven Mindset", "Root Cause Analysis"]
  const otherSkills_3 = ["Team Player", "Quick Learner"]

  return(
    <section className="skillsSection" id="skillsSection">
      <div className="sectionContainer">
        <h2 className="sectionTitle">Resume</h2>
        <div className="skillsGrid">
          <h3 className="expGridTitle bold">Languages/Technologies</h3>
          <h3 className="underline devSkillsLineTitle-1 ">Most at Home with:</h3>
          <div className="leftContainer">
            <div className="devSkillsLine-1">
              <img src="skills-img/react-logo.png" alt="React Logo"/>
              <img src="skills-img/nodejs-logo.png" alt="NodeJS Logo"/>
              <img src="skills-img/mongodb-logo.png" alt="MongoDB Logo"/>
              <img src="skills-img/express-logo.png" alt="Express Logo"/>
              <div>React</div>
              <div>Node.js</div>
              <div>MongoDB</div>
              <div>Express</div>
            </div>
          </div>
          <h3 className="underline devSkillsLineTitle-2">Proficient with:</h3>
          <div className="rightContainer">
            <div className="devSkillsLine-2">
              <img src="skills-img/logo-javascript.svg" alt="Javascript Logo"/> 
              <img src="skills-img/html-1.svg" alt="HTML Logo"/>
              <img src="skills-img/css-3.svg" alt="CSS Logo"/>
              <img src="skills-img/sass-1.svg" alt="SASS Logo"/>
              <img src="skills-img/Figma-logo.svg" alt="Figma Logo"/>
              <div>JS</div>
              <div>HTML</div>
              <div>CSS</div>
              <div>SASS</div>
              <div>Figma</div>
              <img src="skills-img/redux.svg" alt="Redux Logo"/>
              <img src="skills-img/jest-2.svg" alt="Jest Logo"/>
              <img src="skills-img/cypress.png" alt="Cypress Logo"/>
              <img src="skills-img/git-icon.svg" alt="Git Logo"/>
              <img src="skills-img/shopify.svg" alt="Shopify Logo"/>
              <div>Redux</div>
              <div>Jest</div>
              <div>Cypress</div>
              <div>Git</div>
              <div>Liquid</div>
            </div>
          </div>

          <h3 className="expGridTitle bold">Other Skills</h3>

          <div className="bottomContainer">
            <div className="otherSkillsFlex">{otherSkills_1.map(s => <div className="otherSkillTile">{s}</div>)}</div>
            <div className="otherSkillsFlex">{otherSkills_2.map(s => <div className="otherSkillTile">{s}</div>)}</div>
            <div className="otherSkillsFlex">{otherSkills_3.map(s => <div className="otherSkillTile">{s}</div>)}</div>
          </div>

        </div>
      
        <div className="expContainer">
          <h3 className="expGridTitle bold">Professional Experience</h3>
          <div className="expFlex">
            <div className="leftContainer">
              <h3 className="underline expTitle">Web Development</h3>
              <div className="currentExpFlex">
                <img src="exp-img/pixel-walrus-logo.svg" id="pixelWalrusLogo" alt="Pixel Walrus Logo"/>
                <div>
                  <div className="positionTitle bold">Front End Developer</div>
                  <div className="smallFont"><span>Products: </span><span>Shopify Stores</span></div>
                  <div className="smallFont"> 2021 - Present (Freelance) </div>
                </div>
                
              </div>
              <div>
                  <div className="respTitle">Responsibilities:</div>
                  <div className="smallFont alignLeft respDescription">
                    <ul>
                      <li>Utilized JS/CSS/HTML/Liquid to improve eCommerce stores</li>
                      <li>Closed tickets by adding features and resolving bugs</li>
                      <li>Incorporated styling based on Adobe XD design mockups</li>
                      <li>Collaborated through code review and proposal meetings</li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="rightContainer">
              <h3 className="underline expTitle">Mechanical Engineering</h3>
              
              <div className="currentExpFlex">
                <img src="exp-img/toyota.svg" id="toyotaLogo" alt="Toyota Logo"/>
                <div>
                  <div className="positionTitle">Manufacturing Engineer</div>
                  {/* <div className="smallFont">
                    <span className="webText">Products: Toyota RAV4/Lexus RX350</span>
                    <span className="mobileText">Toyota RAV4/Lexus RX350</span>
                  </div> */}
                  <div className="smallFont">Products: Toyota RAV4/Lexus NX350</div>
                  <div className="smallFont">2018 - Present (Fulltime)</div>
                </div>
              </div>
              <div className=""><i>Previously worked at: </i></div>
              <div className="otherExpFlex">
                <span className="expLogoContainer">
                  <img src="exp-img/university-of-waterloo.svg" id="uwLogo" alt="University of Waterloo Logo"/>
                </span>
                <span className="expLogoContainer">
                  <img src="exp-img/canada-3.svg" id="canadaLogo" alt="Government of Canada Logo"/>
                </span>
                <span className="expLogoContainer">
                  <img src="exp-img/tesla-motors-1.svg" id="teslaLogo" alt="Tesla Logo"/>
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