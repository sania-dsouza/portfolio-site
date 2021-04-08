import React from "react"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function BlogBlock() {

    const data = useStaticQuery(
        graphql`
            query BlogQuery {
                blog: allMarkdownRemark(filter: {fields: {collection: {eq: "blog"}}}) {
                    posts: nodes {
                        fields {
                            slug
                        }
                        frontmatter {
                            date(fromNow: true)
                            title
                            author
                        }
                        excerpt(pruneLength: 190)
                        id
                        timeToRead
                    }
                }
            }
    `)

    const { posts } = data.blog
    

    return (

        posts.map(post => 
            
            <div style = {{
                margin: `1.5rem 2rem 0 2rem`,
                fontFamily: `Roboto Condensed`,
                padding: `0.5rem`,
                fontSize: `20px`,
                border: `1px solid`,
                height: `60%`,
                borderRadius: `15px`,
                backgroundColor: `#ffffff`,
                color: `#2dc492`,
                overflow: `hidden`,
                position: `relative`,
                }} className= "block">
                
                {/* <div style= {{ width: `100%`, height: `55%`, position: `absolute`}}>
                    <img width= "100%" height="100%" src={`https://cdn-images-1.medium.com/max/400/${post.node.virtuals.previewImage.imageId}`}/>
                </div>  */}
                
                <div style= {{ marginLeft: `2px`, width: `100%`, height: `100%`, position: `absolute`, bottom: `0`, paddingTop: `0.75em`}}>
                    <Link to={post.fields.slug}>
                        <div data-cy="project-title" style= {{ fontWeight: `bold`, fontSize: `24px`, color: `#357068`}}> {post.frontmatter.title} </div>
                    </Link>
                    <small>{post.frontmatter.date}, {post.timeToRead} min read</small>
                    <p style= {{ fontSize: `0.85em`, color: `#357068`, padding: `0 1em 0 0`}}>{post.excerpt}</p>                    
                    
                    {/* <Link data-cy="external-link"
                        style={{ textDecoration: "none", fontFamily: `Roboto Condensed`, fontSize: `16px`, color: `#357068` }}
                        to={`/`}
                        >
                            <div style= {{ width: `5%`, height: `5%`}}>
                                <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-black.png" alt="DevTO Icon" />
                            </div>
                    </Link> */}

                </div>
                
                
            </div>
        )
        
    )
}


