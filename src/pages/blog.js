import React from "react"
import Layout from "../components/layout"
import BlogBlock from "../components/blogBlock"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

const BlogPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Reading</title>
      <link rel="canonical" href="http://localhost:8000/blog" />
    </Helmet>
    <SEO title="Reading" />
    
    <div style= {{ textAlign: `center`, marginTop: `1rem`, padding: `auto`, color: `#e3dcdc`, fontFamily: 'Vollkorn', fontWeight: `bold`, fontSize: `32px`}}>
      <div>Reading</div>
    </div>
    
    {/* for the projects/blog posts that need to be displayed */}
    <div className= "blockWrapper" style= {{ width: `100%`, height: `160%`, margin: `auto`}}>
      <BlogBlock></BlogBlock>
    </div>
    
  </Layout>
)

export default BlogPage
