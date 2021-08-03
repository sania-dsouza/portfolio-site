import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'

export default function BlogBlock({article}) {

    return (
        <div className="quicklookBlockBlog">
            
                <div className="blogImage">
                    {/* <img src="../images/devTO.png" alt="test image"/> */}
                    <Link to={`/blog/${article.slug}`}>
                        <Img alt={article.heroImage.description} style={{ width: `100%`, height: `100%`, borderRadius: `20px 20px 0 0` }} fluid={article.heroImage.fluid} />
                    </Link>
                </div>

                <div className="blogText">
                    <Link to={`/blog/${article.slug}`}>
                        <div className="blogTitle" data-cy="blog-title" style= {{ fontWeight: `bold`, color: `#6f37a3`}}> {article.title} </div>
                    </Link>

                    <div>
                        {article.subtitle}
                    </div>
                    <small>{article.timeToRead} mins &#183; {article.publishDate}</small>
                
                    <p className="blogDesc" style= {{ fontSize: `0.85em`, color: `#6f37a3`, padding: `0 1em 0 0`}}> {article.subtitle.subtitle} </p>                    
                </div>
        </div>
    )
}
