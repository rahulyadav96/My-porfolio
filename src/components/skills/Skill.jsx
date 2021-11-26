import"./skill.scss"

export default function Skill() {
    return (
        <div className="skills" id="skills">
            <h1>Skills</h1>
            <p>My Technical Skills</p>
            <div className="skillContainer">
                <div className="skill">
                    <div className="skillimgCont">
                        <img src="./assets/html.svg" alt="html"/>
                    </div>
                    <div className="skill-title"><spna>HTML</spna></div>
                </div>
                <div className="skill">
                    <div className="skillimgCont">
                        <img src="./assets/css.svg" alt="css"/>
                    </div>
                    <div className="skill-title"><spna>CSS</spna></div>
                </div>
                <div className="skill">
                    <div className="skillimgCont">
                        <img src="./assets/javascript.svg" alt="js"/>
                    </div>
                    <div className="skill-title"><spna>javaScripts</spna></div>
                </div>
                <div className="skill">
                    <div className="skillimgCont">
                        <img src="./assets/react.svg" alt="react"/>
                    </div>
                    <div className="skill-title"><spna>ReactJS</spna></div>
                </div>
            </div>
          
           
        </div>
    )
}
