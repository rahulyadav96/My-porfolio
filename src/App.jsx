import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import Skill from "./components/skills/Skill";
import Education from "./components/educations/Education";
import About from "./components/about/About";
import Project from  "./components/projects/Project";
import Services from "./components/services/Services";
import { useState } from "react";
import "./app.scss"
import Menu from "./components/menu/Menu";
function App() {
const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro />
       <About />
       <Skill />
       <Project />
       <Education />
       <Services />
       <Contact />
     </div>
     
    </div>
  );
}

export default App;
