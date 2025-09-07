import './about.css';
import { FaHtml5 } from "react-icons/fa";
import { PiFileCss } from "react-icons/pi";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { DiResponsive } from "react-icons/di";
import { FaPhp } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

function About () {
    return (
        <section className="about-section">
            <div className="about-card">
                <h1 className="about-title">On a Learning Curve</h1>
                <h2 className="about-subtitle">Student & Aspiring Web Developer</h2>
                <p className="about-text">
                    I’m currently a student passionate about building web pages and learning new technologies.<br/>
                    My journey started with <span className="highlight">HTML</span> and <span className="highlight">CSS</span>, and now I’m exploring <span className="highlight">JavaScript</span> and <span className="highlight">React</span>.
                </p>
                <div className="skills-area">
                    <div className="skills-group">
                        <h3>Skills</h3>
                        <ul className="skills-list">
                            <li><FaHtml5 className="skill-icon html" /> HTML</li>
                            <li><PiFileCss className="skill-icon css" /> CSS</li>
                            <li><TbBrandJavascript className="skill-icon js" /> JavaScript</li>
                            <li><FaPhp className="skill-icon php" /> Php</li>
                            <li><GrMysql className="skill-icon mysql" /> MySQL</li>
                        </ul>
                    </div>
                    <div className="skills-group">
                        <h3>Currently Learning</h3>
                        <ul className="skills-list">
                            <li><FaReact className="skill-icon react" /> React</li>
                            <li><FaNodeJs className="skill-icon node" /> Node.js</li>
                            <li><DiResponsive className="skill-icon responsive" /> Responsive Design</li>
                        </ul>
                    </div>
                </div>
                <p className="about-hobbies">
                    <em>
                        <strong className="hobby-highlight">
                            Outside coding, I love reading, travelling, and playing games.
                        </strong>
                    </em>
                </p>
                <p className="about-connect">
                    Feel free to connect with me on
                    <a className="about-link" href="mailto:rasmipariyar1@gmail.com"> Email</a> or
                    <a className="about-link" href="https://www.linkedin.com/in/rasmi-pariyar-1b0b2b1b6/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>.
                </p>
            </div>
        </section>
    );
}

export default About;