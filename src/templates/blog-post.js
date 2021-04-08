import React from "react"
import { graphql } from "gatsby"
import {Link} from "gatsby"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import Img from "gatsby-image"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  //let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  
  return (
    <div className="blogPost">
      <Link to="/blog" style={{ color: `#357068`, fontWeight: `bold`}}> <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> &nbsp; Go back </Link>
      <p></p>
      <h1>{post.frontmatter.title}</h1>
      <p style={{ fontSize: `16px`}}>{post.frontmatter.date}, {post.timeToRead} min read</p>
      {/* <Img fluid={featuredImgFluid} /> */}
      <div style={{ fontSize: `22px`}} dangerouslySetInnerHTML={{ __html: post.html }} />
      <p></p>
      <Link to="/blog" style={{ color: `#357068`, fontWeight: `bold`}}> <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> &nbsp; Go back </Link>
    </div>
  )
}
export const query = graphql`
  query BlogDisplayQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(fromNow: true)
        # featuredImage {
        #   childImageSharp {
        #     fluid(maxWidth: 800) {
        #       ...GatsbyImageSharpFluid
        #     }
        #   }
        # }
      }
      timeToRead
    }
  }
`