import React from 'react'
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode, faBookmark, faCamera, faLeaf, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components"
import { Link } from "gatsby"

config.autoAddCss = false;

const NavItem = styled(Link)`
    padding-right: 5rem;
    color: #357068;
    display: inline-block;

    @media (max-width: 740px) {
        padding-left: 1.5rem;
        padding-top: 12%;
        font-size: 16px;
        z-index: 6;
      }
`
export default function MenuIcons() {
    return (
        <div className="menuIcons" style = {{ padding: `0 auto 1rem auto`, textAlign: "center", width: `100%` }}>
            <NavItem to = "/projects"><FontAwesomeIcon icon={faFileCode} className="icon" size="3x" title="Projects"/> </NavItem>
            <NavItem to = "/blog"><FontAwesomeIcon icon={faBookmark} className="icon" size="3x" title="Blog"/> </NavItem>
            <NavItem to = "/gallery"><FontAwesomeIcon icon={faCamera} className="icon" size="3x" title="Gallery"/> </NavItem>
            <NavItem to = "https://drive.google.com/file/d/1fQuZUfnP_i9tRplF8Vfj3jDBx-3KZfr1/view?usp=sharing"><FontAwesomeIcon icon={faBriefcase} className="icon" size="3x" title="Resume"/> </NavItem> 

            {/* <a href="file:///Users/saniadsouza/Personal_Projects/personal_site/personal_site/src/resources/resume.pdf" download="resume" style={{ paddingRight: `5rem`, color: `#357068` }}><FontAwesomeIcon icon={faBriefcase} className="icon" size="3x" title="Download my resume"/></a> */}
            {/* <a href="/pot-pourri" style={{ paddingRight: `5rem`, color: `#357068` }}><FontAwesomeIcon icon={faLeaf} className="icon" size="3x" title="Pot Pourri"/></a> */}
        </div>
)
    }



