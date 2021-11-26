import "./intro.scss";
import { init } from 'ityped';
import { ExpandMore } from "@material-ui/icons"
import { useEffect, useRef } from "react";
export default function Intro() {
    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current, { 
            showCursor: true,
            backDelay:1500,
            strings: ['Web Developer'] })
console.log(textRef);
    },[])
    return (
        <div className="intro" id="intro">
         <div className="left">
             <div className="imageContainer">
                 <img src="assets/pic.png" alt="rahul" />
             </div>
         </div>
         <div className="rigth">
             <div className="wrapper">
                 <h1>HI, I AM RAHUL</h1>
                 <h3>Full-Stack <span ref={textRef}></span></h3>
                 <p>High level experience in web design and development knowledge, producing quality work.</p>
             </div>
             <a href="#about">
                <ExpandMore className="expand-icon"/>
             </a>
         </div>
        </div>
    )
}
