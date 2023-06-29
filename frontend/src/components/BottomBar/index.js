// import linkedinlogo from "./Images/white-linkedin.png"
import "./BottomBar.css"
import githublogo from "./Images/gray-github.png"
// import linkedin from "./Images/linkedin.png"
import { AiOutlineLinkedin } from 'react-icons/ai'
export function BottomBar () {
    return (
        <>
        <div className="bottom-bar-container">
            <div className="bottom-icon"> 
                <a href="https://www.linkedin.com/in/shanna-le/" target="blank">
                    <AiOutlineLinkedin className="bar-logo-linkedin" />
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