import React from "react"
import Layout from "../components/layout"
import ProjectBlock from "../components/projectBlock"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"

const ProjectsPage = () => (
  
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Projects</title>
      <link rel="canonical" href="http://localhost:8000/projects" />
    </Helmet>
    <SEO title="Projects" />
    
    <div style= {{ textAlign: `center`, marginTop: `1rem`, padding: `auto`, color: `white`, fontFamily: 'Vollkorn', fontWeight: `bold`, fontSize: `32px`}}>
      <div>Projects</div>
    </div>
    
    {/* for the projects/blog posts that need to be displayed */}
    <div className= "projBlockWrapper">
      <ProjectBlock></ProjectBlock>
    </div>
   
  </Layout>
)

export default ProjectsPage
