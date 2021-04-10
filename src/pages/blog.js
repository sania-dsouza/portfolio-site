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
    
    <div style= {{ textAlign: `center`, marginTop: `1rem`, padding: `auto`, color: `white`, fontFamily: 'Vollkorn', fontWeight: `bold`, fontSize: `32px`}}>
      <div>Reading</div>
    </div>
    
    {/* for the projects/blog posts that need to be displayed */}
    <div className= "blockWrapper" style= {{ width: `100%`, margin: `0 auto 2rem auto`}}>
      <BlogBlock></BlogBlock>
    </div>

    <div style= {{ textAlign: `center`, padding: `auto`, color: `white`, fontFamily: 'Vollkorn', fontWeight: `bold`, fontSize: `32px`}} > Further reading: </div>
    <div className="blogWidgetDiv" style = {{ textAlign: `center`, marginBottom: `1.5em` }}>
      <div> <a href= "https://dev.to/saniadsouza"> <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-black.png" title="DevTO" alt="DevTO"/> </a> </div> 
      <div> <a href= "https://medium.com/me/stories/public"> <img src="https://miro.medium.com/max/3404/1*jfdwtvU6V6g99q3G7gq7dQ.png" title="Medium" alt="Medium" />  </a></div>
    </div>
    
  </Layout>
)

export default BlogPage
