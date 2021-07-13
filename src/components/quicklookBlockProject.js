import React from "react"
import { Link } from "gatsby"

export default function BlogBlock() {

    return (
        <div className="quicklookBlockProject">
            <div className="projectImage">
                <img src="devTOIcon.png" alt="test image"/>
            </div>
            <Link to="/">
                <div className="projectTitle" data-cy="project-title" style= {{ fontWeight: `bold`, fontSize: `22px`, color: `#2dc492`}}> Project title </div>
            </Link>
            <div className="projectTitle" data-cy="project-title" style= {{ fontSize: `18px`}}> NLP + Python </div>
        </div>
    )
}
