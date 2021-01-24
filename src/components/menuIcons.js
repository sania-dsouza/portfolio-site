import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode, faBookmark, faCamera, faLeaf, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components"
import { Link } from "gatsby"

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
        <div className="menuIcons" style = {{ maxWidth: 1200, textAlign: "center", width: `100%` }}>
            <NavItem to = "/projects"><FontAwesomeIcon icon={faFileCode} className="icon" size="3x" title="Projects"/> </NavItem>
            <NavItem to = "/blog"><FontAwesomeIcon icon={faBookmark} className="icon" size="3x" title="Reading"/> </NavItem>
            <NavItem to = "/gallery"><FontAwesomeIcon icon={faCamera} className="icon" size="3x" title="Gallery"/> </NavItem>
            <NavItem to = "https://drive.google.com/file/d/1fQuZUfnP_i9tRplF8Vfj3jDBx-3KZfr1/view?usp=sharing"><FontAwesomeIcon icon={faBriefcase} className="icon" size="3x" title="Projects"/> </NavItem>

            {/* <a href="file:///Users/saniadsouza/Personal_Projects/personal_site/personal_site/src/resources/resume.pdf" download="resume" style={{ paddingRight: `5rem`, color: `#357068` }}><FontAwesomeIcon icon={faBriefcase} className="icon" size="3x" title="Download my resume"/></a> */}
            {/* <a href="/pot-pourri" style={{ paddingRight: `5rem`, color: `#357068` }}><FontAwesomeIcon icon={faLeaf} className="icon" size="3x" title="Pot Pourri"/></a> */}
        </div>
)
    }



