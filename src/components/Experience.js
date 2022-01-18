
const Experience = () => {
  
  return(
    <section className="expSection">
      <div className="sectionTitle">Experience</div>
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
              <img src="toyota.svg" id="toyotaLogo"/>
              <div className="alignLeft">
                <div>Manufacturing Engineer</div>
                <div className="smallFont">Products: Toyota RAV4/Lexus RX350</div>
                <div className="smallFont">2018 - Present</div>
              </div>
            </div>
            <p className="underline bold">Other Experience</p>
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