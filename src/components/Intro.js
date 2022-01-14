
const Intro = () =>{
  const scrollFunc = (section) =>{
    document.getElementById(section).scrollIntoView()
  }

  return(
      <div className="introFlex">
        <input type="button" value="Portfolio" onClick={() => scrollFunc("portfolioSection")}/>
        <button type="button">About</button>
        <button type="button">Portfolio</button>
        <button type="button">Contact</button>
      </div>
  )
}

export default Intro