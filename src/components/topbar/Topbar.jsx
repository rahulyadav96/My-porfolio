import "./topbar.scss"
import{Phone, MailOutline} from "@material-ui/icons"
export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Rahul Kumar Yadav</a>
                    <div className="itemContainer">
                        <Phone className="icon"/>
                        <span>+91 8577963932</span>
                    </div>
                    <div className="itemContainer">
                        <MailOutline className="icon"/>
                        <span>mrahul.yadav96@gmail.com</span>
                    </div>
                </div>
                <div className="rigth">
                    <div className="humburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
