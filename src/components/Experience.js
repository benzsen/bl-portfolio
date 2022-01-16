
const Experience = () => {
  
  return(
    <section className="expSection">
      <div className="sectionTitle">Experience</div>
        <div className="expFlex">
          <div className="leftContainer">
            <h3>Web Development</h3>
              <p className="underline">Freelance</p>
          </div>
          <div className="line"></div>
          <div className="rightContainer">
            <h3>Mechanical Engineering</h3>
            <div className="underline">Current Role</div>
            <div className="currentExpFlex">
              <img src="toyota.svg" id="toyotaLogo"/>
              <div className="alignLeft">
                <div>Manufacturing Engineer</div>
                <div className="mediumFont">Products: Toyota RAV4/Lexus RX350</div>
                <div className="mediumFont">2018 - Present</div>
              </div>
            </div>
            <div className="underline">Other Experience</div>
            <div className="otherExpFlex">
              <span className="expLogoContainer">
                <img src="university-of-waterloo.svg" id="uwLogo"/>
              </span>
              <span className="expLogoContainer">
                <img src="canada-3.svg" id="canadaLogo"/>
              </span>
              <span className="expLogoContainer">
                <img src="tesla-motors-1.svg" id="teslaLogo"/>
              </span>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Experience