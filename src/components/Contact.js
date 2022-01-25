
const Contact = () =>{

  return(
    <section className="contactSection whiteBackgroud" id="contactSection"> 
      <div className="sectionContainer">
        <div className="sectionTitle">Contact</div>
        <div className="contactFlex">
          <div>
            <a href="mailto:bennyluo95@gmail.com" id="email"><img src="Mail_(iOS).svg"/></a>
            Email:
          </div>
          <div>
            <a href="https://github.com/benzsen" target="_blank" id="github"><img src="github-svgrepo-com.svg"/></a>
            Github:
          </div>
          <div>
            <a href="https://www.linkedin.com/in/luobenny/" target="_blank" id="linkedin"><img src="linkedin-icon.svg"/></a>
            LinkedIn:
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact