import linkedinlogo from "./Images/white-linkedin.png"
import "./BottomBar.css"
import githublogo from "./Images/gray-github.png"


export function BottomBar () {
    return (
        <>
        <div className="bottom-bar-container">
            <div className="bottom-icon"> 
                <a href="https://www.linkedin.com/in/shanna-le/" target="blank">
                    <img src={linkedinlogo} className="bar-logo-linkedin"/> 
                </a> 
            </div>
            <span className="bottom-icon-github"> 
                <a href="https://github.com/shannale/Shaphora" target="blank">
                    <img src={githublogo}className="bar-logo-github"/> 
                </a>
            </span>

            
        </div>
        </>
    )
}