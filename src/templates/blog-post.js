import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from "../components/seo"


class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    // const siteTitle = get(this.props, 'site.siteMetadata.title')
    
    return (
      <Layout location={this.props.location}>
        <div className="post-div" style={{ background: '#fff' }}>
          <Helmet>
            <title> {`${post.title}`} </title>
            <meta charSet="utf-8" />
            <description> {`${post.subtitle}`} </description>
          </Helmet> 
          <SEO title={post.title} />
          
          <div>
            <Img
              className="post-hero"
              alt={post.title}
              fluid={post.heroImage.fluid}
            />
          </div>
          <div className="post-wrapper">
            <h1 className="section-headline" style={{ color:  `#6f37a3` }}>{post.title}</h1>
            <p> {post.subtitle} </p> 
            <p
              style={{
                display: 'block',
                color: `#6f37a3`
              }}
            >
              {post.timeToRead} mins &#183; {post.publishDate}
            </p>

            <Link href="/blog" style = {{ color: `#6f37a3`, float: `right`, fontWeight: `bold`}}>
              &#8592; All posts
            </Link>

              <br/><br/>
            <div
              dangerouslySetInnerHTML={{
                __html: post.childContentfulBlogPostBodyRichTextNode.childContentfulRichText.html,
              }}
            />

            <Link href="/blog" style={{ color: `#6f37a3`, fontWeight: `bold` }}>
              &#8592; All blog posts
            </Link>
            
          </div>

          
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      timeToRead
      subtitle
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      childContentfulBlogPostBodyRichTextNode {
          childContentfulRichText {
            html
          }
      }
    
    }
  }
`