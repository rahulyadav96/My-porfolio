import "./about.scss"

export default function About() {
    return (
        <div className="about" id="about">
          <div className="aboutContainer">
              <div className="about-top">
                  <h1>About Me</h1>
                  <p>My Introduction</p>
              </div>
              <div className="about-main">
                  <div className="left">
                    <p>Web developer, with extensive knowledge and experienced in collebrative projects. Equally efficient in both Front-end and Back-end Web Development. </p>
                    <div className="left-bottom">
                        <div className="dwl-cv">
                            <a download href="assets/rahul_resume.pdf" >Download CV</a>
                        </div>
                        <div className="project-done">
                            <h2>10+</h2>
                            <p>Completed <br/> Projects</p>
                        </div>
                    </div>

                  </div>
                  <div className="right">
                        <div className="about-img">
                            <img src="assets/pic.png" alt="rahul" />
                        </div>
                  </div>
              </div>
          </div>
        </div>
    )
}
