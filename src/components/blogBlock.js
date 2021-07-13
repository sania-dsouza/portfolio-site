import React from "react"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function BlogBlock() {

    const data = useStaticQuery(
        graphql`
            query BlogQuery {
                blog: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
                        nodes {
                            excerpt
                            fields {
                            slug
                            }
                            frontmatter {
                            date(formatString: "MMMM DD, YYYY")
                            title
                            description
                            }
                        }
                    }
            }
    `)

    const { posts } = data.blog
    

    return (

        // posts.map(post => 
            
        //     <div style = {{
        //         margin: `1.5rem 0rem 0 1.5rem`,
        //         fontFamily: `Roboto Condensed`,
        //         padding: `0.5rem`,
        //         fontSize: `20px`,
        //         border: `1px solid`,
        //         borderRadius: `15px`,
        //         backgroundColor: `#ffffff`,
        //         color: `#2dc492`,
        //         overflow: `hidden`,
        //         position: `relative`,
        //         }} className= "block">
                
        //         {/* <div style= {{ width: `100%`, height: `55%`, position: `absolute`}}>
        //             <img width= "100%" height="100%" src={`https://cdn-images-1.medium.com/max/400/${post.node.virtuals.previewImage.imageId}`}/>
        //         </div>  */}
        //         <div className="blogImage" style={{ textAlign: `center`, width: `100%`, height: `100%` }}>
        //             <img src="test.png" alt="test blog image" />
        //         </div>

        //         <div className="blogText" style= {{ marginLeft: `2px`, width: `100%`, height: `100%`, position: `absolute`, bottom: `0`, paddingTop: `0.75em`, paddingRight: `0.5em`}}>
        //             <Link to={post.fields.slug}>
        //                 <div className="blogTitle" data-cy="project-title" style= {{ fontWeight: `bold`, fontSize: `24px`, color: `#357068`}}> {post.frontmatter.title} </div>
        //             </Link>
        //             <small>{post.frontmatter.date} <span style={{ fontSize: `20px` }}>&middot;</span>  {post.timeToRead} min read</small>
        //             <p className="blogDesc" style= {{ fontSize: `0.85em`, color: `#357068`, padding: `0 1em 0 0`}}>{post.excerpt}</p>                    
        //         </div>
                
                
        //     </div>

        <Link to="/">
            <div className="block">
                <div className="blogText">
                    <div className="blogImage">
                        <img src="https://i.pinimg.com/originals/5c/1b/bb/5c1bbb64c853bdbf9b564084c1240396.png" alt="test image"/>
                    </div>
                    
                        <div className="blogTitle" data-cy="project-title" style= {{ fontWeight: `bold`, fontSize: `24px`, color: `#6f37a3`}}> Blog post title </div>
                    
                    <small style={{ color: `black` }}> 2 min read</small>
                    <p className="blogDesc" style= {{ fontSize: `0.85em`, color: `#6f37a3`, padding: `0 1em 0 0`}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.    </p>                    
                </div>
            </div>
        </Link>
        )

}


