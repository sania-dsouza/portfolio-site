import React from "react"
import Layout from "../components/layout"
import get from 'lodash/get'
import QLBlockBlog from "../components/quicklookBlockBlog"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
        <link rel="canonical" href="https://www.sania-dsouza.com/blog" />
      </Helmet>
      <SEO title="Blog" />
      
      {/* <div style= {{ textAlign: `center`, marginTop: `1rem`, padding: `auto`, color: `white`, fontFamily: 'Vollkorn', fontWeight: `bold`, fontSize: `32px`}}>
        <div>Reading</div>
      </div> */}
      
      {/* for the projects/blog posts that need to be displayed */}
      <div className="blockWrapper">
        {/* <h2>Recent articles</h2> */}
        {posts.map(({ node }) => {
          return (
              <QLBlockBlog article={node} />
          )
        })}
      </div>

        {/* <div style= {{ textAlign: `center`, padding: `auto`, color: `white`, fontFamily: 'Vollkorn', fontWeight: `bold`, fontSize: `32px`}} > Further reading: </div>
        <div className="blogWidgetDiv" style = {{ textAlign: `center`, marginBottom: `1.5em` }}>
          <div> <a href= "https://dev.to/saniadsouza"> <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-black.png" title="DevTO" alt="DevTO"/> </a> </div> 
          <div> <a href= "https://medium.com/me/stories/public"> <img src="https://miro.medium.com/max/3404/1*jfdwtvU6V6g99q3G7gq7dQ.png" title="Medium" alt="Medium" />  </a></div>
        </div> */}
      
    </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogPageQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          subtitle
          timeToRead
        }
      }
    }
  }
`
