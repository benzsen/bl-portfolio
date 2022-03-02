
const Contact = ({email, linkedin, github}) =>{

  return(
    <section className="contactSection" id="contactSection"> 
      <div className="sectionContainer">
        <h2 className="sectionTitle">Contact</h2>
        <div className="contactBox">
          <div className="contactGrid smallFont">
            <div id="email"><a href={`mailto:${email}`}><img src="contact-img/mail.svg" alt="Email Symbol"/></a></div>
            <div className="bold">Email:</div>
            <div className="contactInfo"><a href={`mailto:${email}`}>{email}</a></div>
            <div id="github"><a href={github} target="_blank"><img src="contact-img/github.svg" alt="Github Logo"/></a></div>
            <div className="bold">Github:</div>
            <div className="contactInfo"><a href={github} target="_blank">{github}</a></div>
            <div id="linkedin"><a href={linkedin} target="_blank"><img src="contact-img/linkedin-icon.svg" alt="LinkedIn Logo"/></a></div>
            <div className="bold">LinkedIn:</div>
            <div className="contactInfo"><a href={linkedin} target="_blank">{linkedin}</a></div>
          </div>
        </div>
      </div>
    </section>  
  )
}

export default Contact