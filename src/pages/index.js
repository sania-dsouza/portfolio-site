import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"
import Bio from "../components/bio"
import QLBlockProject from "../components/quicklookBlockProject"
import QLBlockBlog from "../components/quicklookBlockBlog"
import get from 'lodash/get'

class IndexPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const projects = get(this, 'props.data.allContentfulDataProjectPost.edges')
    
    return(
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
          <description>Test</description>
          <link rel="canonical" href="http://localhost:8000" />
        </Helmet>
        <SEO title="Home" />

        <Bio></Bio>
  

    <div className="quicklookDiv" id="qlblock1"> 
        <p style={{ color: `black`, padding: `0.5rem 1rem 0`, fontWeight: `bold`, fontSize: `28px`}}>Featured projects</p>
        
        <div className="qlBlockDiv">
          {projects.map(({ node }) => {
            return (
              <QLBlockProject article={node}/>
            )
          })}
        </div>
        
        <Link to="/projects"><div className="seemore"> See more projects &#8594;</div></Link>
    </div>

    <div className="quicklookDiv" id="qlblock2"> 
      <p style={{ color: `black`, padding: `0.5rem 1rem 0`, fontWeight: `bold`, fontSize: `28px`}}>Recent posts</p>
        
      <div className="qlBlockDiv">
          {posts.map(({ node }) => {
            return (
              <QLBlockBlog article={node}/>
            )
          })}
        </div>
        
        <Link to="/blog"><div className="seemore"> See more posts &#8594;</div></Link>
    </div>
  </Layout>
)
}
}

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {

    #query for blog postss
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }, limit: 3) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          subtitle
          timeToRead
        }
      }
    }
    
    # Query for projects 
    allContentfulDataProjectPost(sort: { fields: [publishDate], order: DESC }, limit: 3) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          subtitle{
            subtitle
          }
          timeToRead
        }
      }
    }
  }
`