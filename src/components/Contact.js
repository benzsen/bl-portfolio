
const Contact = () =>{

  return(
    <section className="contactSection" id="contactSection"> 
      <div className="sectionContainer">
        <div className="sectionTitle">Contact</div>
        <div className="contactBox">
          <div className="contactGrid smallFont">
            <div id="email"><a href="mailto:bennyluodev@gmail.com"><img src="Mail_(iOS).svg"/></a></div>
            <div className="bold">Email:</div>
            <div className="contactInfo"><a href="mailto:bennyluodev@gmail.com">bennyluodev@gmail.com</a></div>
            <div id="github"><a href="https://github.com/benzsen" target="_blank"><img src="github-svgrepo-com.svg"/></a></div>
            <div className="bold">Github:</div>
            <div className="contactInfo"><a href="https://github.com/benzsen" target="_blank">github.com/benzsen</a></div>
            <div id="linkedin"><a href="https://www.linkedin.com/in/luobenny/" target="_blank"><img src="linkedin-icon.svg"/></a></div>
            <div className="bold">LinkedIn:</div>
            <div className="contactInfo"><a href="https://www.linkedin.com/in/luobenny/" target="_blank">linkedin.com/in/luobenny</a></div>
          </div>
        </div>
      </div>
    </section>  
  )
}

export default Contact