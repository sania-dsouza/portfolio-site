import React from "react"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function Contact() {
    return (
        <div data-cy="social-links-hero">
            <br/>
            <div className="social"> <a href="mailto:sania.dsouza2012@gmail.com" style={{ color: `orange`}}><FontAwesomeIcon icon= {faEnvelopeSquare} className="cIcon" size="2x" aria-label="Gmail" title="Gmail"/></a></div>
            <div className="social"> <a href="https://www.linkedin.com/in/saniadsouza/" style={{ color: `#0072b1`}}><FontAwesomeIcon icon= {faLinkedin} className="cIcon" size="2x" aria-label="LinkedIn" title="LinkedIn"/></a> </div>
            <div className="social"> <a href="https://github.com/sania-dsouza" style={{ color: `black` }}><FontAwesomeIcon icon= {faGithub} className="cIcon" size="2x" aria-label="Github" title="Github"/></a></div>
            {/* <div className="resume"> <a href="https://drive.google.com/file/d/1fQuZUfnP_i9tRplF8Vfj3jDBx-3KZfr1/view?usp=sharing" target="_blank"> Resume </a> </div> */}
        </div>
    )
}