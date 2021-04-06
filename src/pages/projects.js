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
      <description> Mix of front-end and back-end projects I've worked on. They include the most commonly used functionalities in the software dev space today</description>
      <meta name="keywords" content="sania, software development, web development, freelancer, website" />
    </Helmet>

    <SEO title="Projects" keywords={ ["projects", "freelance", "javascript", "react", "vue", "django", "python"] } />
    
    <div style= {{ textAlign: `center`, marginTop: `1rem`, padding: `auto`, color: `#e3dcdc`, fontFamily: 'Vollkorn', fontWeight: `bold`, fontSize: `32px`}}>
      <div>Projects</div>
    </div>
    
    {/* for the projects/blog posts that need to be displayed */}
    <div className= "projBlockWrapper">
      <ProjectBlock></ProjectBlock>
    </div>
   
  </Layout>
)

export default ProjectsPage
