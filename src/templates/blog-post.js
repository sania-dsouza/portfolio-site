import React from "react"
import { graphql } from "gatsby"
import {Link} from "gatsby"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <div className="blogPost">
      <Link to="/blog" style={{ color: `#357068`, fontWeight: `bold`}}> <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> &nbsp; Go back to blog </Link>
      <p></p>
      <h1>{post.frontmatter.title}</h1>
      <p style={{ fontSize: `16px`}}>{post.frontmatter.date}, {post.timeToRead} min read</p>
      <div style={{ fontSize: `22px`}} dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link to="/blog" style={{ color: `#357068`, fontWeight: `bold`}}> <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> &nbsp; Go back to blog </Link>
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
      }
      timeToRead
    }
  }
`