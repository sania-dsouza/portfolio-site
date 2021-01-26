import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    
    <footer className="footer"
        style={{            
            background: `#2dc492`,
            padding: `0.25rem 0.5rem 0 0.5rem`,
            color: `white`,
            fontWeight: `bold`,
            width: `100%`,
            height: `100%`,
            fontFamily: `Vollkorn`
            }}>
        
            <div className="footer-credits"
                style= {{ 
                    float: "left"
                }}
                >
                <span>
                © {new Date().getFullYear()}. Built with Gatsby.
                {` `} See how <a href="https://github.com/sania-dsouza/personal_site" style= {{ color: `#ffd100`}}>here</a>.
                </span>   
            </div>

            <div className="footer-social"
                style= {{ 
                    float: "right",
                }}
                >
                {/* <span style= {{ lineHeight: `10px`, verticalAlign: `middle`}}>
                Let's connect: 
                </span> */}
                <span data-cy="social-links">
                <a href="mailto:sania.dsouza2012@gmail.com" style={{ paddingLeft: `1rem`, color: `#e3dcdc`}}><FontAwesomeIcon icon= {faEnvelope} className= "fIcon" size="2x" aria-label="Gmail" title="Gmail"/></a>
                <a href="https://www.linkedin.com/in/saniadsouza/" style={{ paddingLeft: `1.5rem`, color: `#e3dcdc`}}><FontAwesomeIcon icon= {faLinkedin} className= "fIcon" size="2x" aria-label="LinkedIn" title="LinkedIn"/></a>
                <a href="https://github.com/sania-dsouza" data-cy="projectLink" style={{ paddingLeft: `1.5rem`, color: `#e3dcdc`}}><FontAwesomeIcon icon= {faCodeBranch} className= "fIcon" size="2x" aria-label="Github" title="Github"/></a>
                
                </span>
            </div>
        
    </footer>
)

export default Footer;

