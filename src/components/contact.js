import React from "react"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function Contact() {
    return (
        <div>
            <span data-cy="social-links">
                <br/>
                <a href="mailto:sania.dsouza2012@gmail.com" style={{ paddingLeft: `1rem`, color: `orange`, margin: `0 1rem 0 0`}}><FontAwesomeIcon icon= {faEnvelopeSquare} className="cIcon" size="2x" aria-label="Gmail" title="Gmail"/></a>
                <a href="https://www.linkedin.com/in/saniadsouza/" style={{ paddingLeft: `1.5rem`, color: `#0072b1`, margin: `0 1rem 0 0`}}><FontAwesomeIcon icon= {faLinkedin} className="cIcon" size="2x" aria-label="LinkedIn" title="LinkedIn"/></a> 
                <a href="https://github.com/sania-dsouza" style={{ paddingLeft: `1rem`, color: `black`, margin: `0 1rem 0 0`}}><FontAwesomeIcon icon= {faGithub} className="cIcon" size="2x" aria-label="Github" title="Github"/></a>
            </span>
        </div>
    )
}