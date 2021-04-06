import React from "react"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useStaticQuery, graphql } from "gatsby"

export default function BlogBlock() {

    const data = useStaticQuery(
        graphql`
            query BlogQuery {
                blog: allMarkdownRemark {
                    posts: nodes {
                        fields {
                            slug
                        }
                        frontmatter {
                        date(fromNow: true)
                        title
                        author
                        }
                        excerpt(pruneLength: 150)
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
                
                <div style= {{ marginLeft: `2px`, width: `100%`, height: `100%`, position: `absolute`, bottom: `0`, padding: `2px`}}>
                    <Link to={post.fields.slug}>
                        <div data-cy="project-title" style= {{ fontWeight: `bold`, fontSize: `24px`, color: `#357068`}}> {post.frontmatter.title} </div>
                    </Link>
                    <small>{post.frontmatter.date}, {post.timeToRead} min read</small>
                    <p style= {{ fontWeight: `bold`, fontSize: `16px`, color: `#357068`}}>{post.excerpt}</p>                    
                    
                    {/* <Link data-cy="blog-link"
                        style={{ textDecoration: "none", fontFamily: `Roboto Condensed`, fontSize: `16px`, color: `#357068` }}
                        to={`https://medium.com/@sania.dsouza2012/${post.node.uniqueSlug}`}
                        ><img/>
                    </Link> */}
                </div>
                
                
            </div>
        )
        
    )
}


