import './App.css';

function App() {
  const mainText = "Hi, I'm Benny"
  const aboutText = "I am a problem solver..."

  const buttonNames = [, "About"]

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <section className="mainSection">
          <div>
            <h3>{mainText}</h3>
            <div>ProfilePic1</div>
          </div>
        </section>
        <section className="aboutSection">
          <div>
            <h3>{aboutText}</h3>
            <div>ProfilePic2</div>
          </div>
        </section>
        <section className="projetsSection">
          <h3>Projects</h3>
          <div>
            Alphatype
          </div>
          <div>
            MKCharts
          </div>
        </section>
        <section className="skillsSection">
          <div>
            <h3>Skills</h3>
          </div>
        </section>
        <section className="contactSection">
          <div>
            <h3>Contact Me</h3>
          </div>
        </section>
        <div className="buttonFlex">Buttons</div>

      </body>
    </div>
  );
}

export default App;
