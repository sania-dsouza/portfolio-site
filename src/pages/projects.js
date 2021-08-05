import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"
import get from 'lodash/get'
import QLBlockProjectPage from "../components/quicklookBlockProjectPage"

class ProjectIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const projects = get(this, 'props.data.allContentfulDataProjectPost.edges')

    return (

      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Projects</title>
          <meta name="description" content="Software development and data science projects" />
          <meta name="keywords" content="data science, projects, coding, react, javascript, test, python" data-react-helmet="true"/>
          <link rel="canonical" href="https://www.sania-dsouza.com/projects" />
        </Helmet>
        <SEO title="Projects" />
        
        <div className= "projBlockWrapper">
          {/* <h2 className="section-headline">All projects</h2> */}
          {projects.map(({ node }) => {
            return (
              <QLBlockProjectPage article={node} />
            )
          })}
        </div>
      
      </Layout>
    )
   }
}

export default ProjectIndex

export const pageQuery = graphql`
  query ProjectPageQuery {
    allContentfulDataProjectPost(sort: { fields: [publishDate], order: DESC } ) {
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
        subtitle{
          subtitle
        }
        timeToRead
        }
      }
    }
  }
`
