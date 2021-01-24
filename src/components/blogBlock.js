import React from "react"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useStaticQuery, graphql } from "gatsby"

export default function BlogBlock() {

    const data = useStaticQuery(
        graphql`
          query BlogQuery {
            allMediumPost {
                edges {
                    node {
                        uniqueSlug
                        title
                        virtuals {
                        subtitle
                        previewImage {
                            imageId
                        }
                        }
                    }
                }
            }
          }
        `)

    const posts = data.allMediumPost.edges
    
    return (

        posts.map(post => 

            <div style = {{
                margin: `1.5rem`,
                fontFamily: `Roboto Condensed`,
                fontSize: `20px`,
                border: `1px solid`,
                height: `150%`,
                borderRadius: `15px`,
                backgroundColor: `#ffffff`,
                color: `#2dc492`,
                overflow: `hidden`,
                position: `relative`,
                }} className= "block">
                
                <div style= {{ width: `100%`, height: `55%`, position: `absolute`}}>
                    <img width= "100%" height="100%" src={`https://cdn-images-1.medium.com/max/400/${post.node.virtuals.previewImage.imageId}`}/>
                </div>
                
                <div style= {{ marginLeft: `2px`, width: `100%`, height: `45%`, position: `absolute`, bottom: `0`, padding: `2px`}}>
                    <div data-cy="blog-title" style= {{ fontWeight: `bold`, fontSize: `24px`, color: `#357068`}}> {post.node.title} </div>
                    
                    <div data-cy="blog-subtitle" style= {{overflow: `hidden`, textOverflow: `ellipsis`, width: `100%`}}> 
                        <div style= {{ fontSize: `18px`, width: `400px`  }}> {post.node.virtuals.subtitle} </div>
                    </div>
                    <div> ... </div>
                    
                    <Link data-cy="blog-link"
                        style={{ textDecoration: "none", fontFamily: `Roboto Condensed`, fontSize: `16px`, color: `#357068` }}
                        to={`https://medium.com/@sania.dsouza2012/${post.node.uniqueSlug}`}
                        >Continue reading <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </Link>
                </div>
                
                
            </div>
        )
        
    )
}

