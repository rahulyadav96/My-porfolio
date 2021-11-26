import "./services.scss"

export default function Services() {
    return (
        <div className="services" id="services">
         <div className="serv-header">
             <h1>Services</h1>
             <p>What I offer</p>
         </div>
         <div className="serv-main">
             <div className="backend card">
                <h1>Backend <br />Development</h1>
             </div>
             <div className="fronend card">
             <h1>Frontend <br />Development</h1>
             </div>
             <div className="management card">
             <h1>Project <br />Management</h1>
             </div>
         </div>
        </div>
    )
}
