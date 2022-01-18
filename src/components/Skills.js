
const Skills = () =>{
  const otherSkills_1 = ["Agile Development", "Project Management"]
  const otherSkills_2 = ["Root-cause Analysis", "Effective Communicatior"]
  const otherSkills_3 = ["Team Player", "Quick Learner"]

  return(
    <section className="skillsSection">
      <div className="skillsGrid">
        <div className="sectionTitle">Qualifications</div>
          <div className="expGrid">
            <h3 className="expGridTitle">Languages/Technologies</h3>
            <div className="leftContainer">
              <p className="underline">Most at Home with:</p>
              <div className="devSkillsLine-1">
                <img src="mongodb-logo.png"/>
                <img src="express-logo.png"/>
                <img src="react-logo.png"/>
                <img src="nodejs-logo.png"/>

                <div>Mongodb</div>
                <div>Express</div>
                <div>React</div>
                <div>Node.js</div>
              </div>
              
            </div>
            <div className="rightContainer">
              <p className="underline">Proficient with:</p>
                <div className="devSkillsLine-2">
                  <img src="logo-javascript.svg"/> 
                  <img src="html-1.svg"/>
                  <img src="css-3.svg"/>
                  <img src="sass-1.svg"/>
                  <img src="shopify.svg"/>
                  <div>JS</div>
                  <div>HTML</div>
                  <div>CSS</div>
                  <div>SASS</div>
                  <div>Liquid</div>
                  <img src="redux.svg"/>
                  <img src="jest-2.svg"/>
                  <img src="cypress.PNG"/>
                  <img src="git-icon.svg"/>
                  <img src="postman.svg"/>
                  <div>Redux</div>
                  <div>Jest</div>
                  <div>Cypress</div>
                  <div>Git</div>
                  <div>Postman</div>
                </div>
            </div>
            <h3 className="underline expGridTitle">Other Skills</h3>
            <div className="bottomContainer">
              <div className="otherSkillsFlex">{otherSkills_1.map(s => <div className="otherSkillTile">{s}</div>)}</div>
              <div className="otherSkillsFlex">{otherSkills_2.map(s => <div className="otherSkillTile">{s}</div>)}</div>
              <div className="otherSkillsFlex">{otherSkills_3.map(s => <div className="otherSkillTile">{s}</div>)}</div>
            </div>
        </div>
      </div>
      
    </section>
  )
}

export default Skills