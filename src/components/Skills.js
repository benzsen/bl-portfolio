
const Skills = () =>{

  return(
    <section className="skillsSection">
      <div className="skillsFlex">
        <div className="sectionTitle">Qualifications</div>
          <div className="expFlex">
            <div className="leftContainer">
              <h3>Languages/Technologies</h3>
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
            <div className="line"></div>
            <div className="rightContainer">
            <h3>Other Skills</h3>
            <p className="underline">Proficient with:</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills