import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'
import Tags from "./tags"

export default function BlogBlock({article}) {

    return (
        <div className="quicklookBlockProject">
            <div className="projectImage">
                {/* <img src={"devTOIcon.png"} alt="test image"/> */}
                <Img alt={article.heroImage.description} fluid={article.heroImage.fluid} style={{ width: `100%`, borderRadius: `20px 20px 0 0 ` }} />
            </div>

            <div className="qlProjectText">
                <Link to={`/project/${article.slug}`}>
                    <div className="projectTitle" data-cy="project-title" style= {{ fontWeight: `bold`, fontSize: `22px`, color: `#2dc492`}}> {article.title} </div>
                </Link> 
                
                <small>{article.publishDate}</small> <br/>
                <small> 
                    {article.tags.map(( tag ) => {
                    return (
                    <Tags tag={tag}/>
                        )
                    })} 
                </small>
            </div>
            {/* <div className="projectTitle" data-cy="project-title" style= {{ fontSize: `18px`}}> NLP + Python </div> */}
        </div>
    )
}
