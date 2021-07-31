import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Tags from "../components/tags"
import SEO from "../components/seo"

class ProjectPostTemplate extends React.Component {
  render() {
    const projPost = get(this.props, 'data.contentfulDataProjectPost')
    //const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div className="post-div" style={{ background: '#fff' }}>
          <Helmet>
              <title> {`${projPost.title}`} </title>
              <meta charSet="utf-8" />
              <description> {`${projPost.subtitle.subtitle}`} </description>
          </Helmet> 
          <SEO title={projPost.title} />
          
          <div className="hero-container">
            <Img
              className="post-hero"
              alt={projPost.title}
              fluid={projPost.heroImage.fluid}
            />
          </div>

          <div className="post-wrapper">
            <h1 className="section-headline" style= {{ color: `#3dc492` }}>{projPost.title}</h1>
            <h3> {projPost.subtitle.subtitle} </h3> 
            <p
              style={{
                display: 'block',
                color: `#3dc492`,
              }}
            >
              {projPost.timeToRead} mins &#183; {projPost.publishDate}
            </p> 


          <Link href="/projects" style = {{ color: `#3dc492`, float: `right`, fontWeight: `bold`}}>
            &#8592; All projects
          </Link>

            <div style={{ margin: `0px 0px 50px`}}> 
              {projPost.tags.map(( tag ) => {
                return (
                  <Tags tag={tag}/>
                )
              })}
            </div>
            
            {/* <Tags tag={projPost.tags[0]} /> */}
            <div
              dangerouslySetInnerHTML={{
                __html: projPost.childContentfulDataProjectPostBodyRichTextNode.childContentfulRichText.html,
              }}
            /> 
            
            <Link href="/projects" style = {{ color: `#3dc492`, fontWeight: `bold`}}>
              &#8592; All projects
            </Link>

          </div>
        </div>
      </Layout>
    )
  }
}

export default ProjectPostTemplate

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    contentfulDataProjectPost(slug: { eq: $slug }) {
      title
      tags
      timeToRead
      subtitle {
          subtitle
      }
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      childContentfulDataProjectPostBodyRichTextNode {
          childContentfulRichText {
            html
          }
      }
    }
  }
`