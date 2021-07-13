import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/homeImage"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"
import InfoDialog1 from "../components/infoDialog1"
import InfoDialog2 from "../components/infoDialog2"
import InfoDialog3 from "../components/infoDialog3"
import Bio from "../components/bio"
import QLBlockProject from "../components/quicklookBlockProject"
import QLBlockBlog from "../components/quicklookBlockBlog"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Home</title>
      <description>Test</description>
      <link rel="canonical" href="http://localhost:8000" />
    </Helmet>
    <SEO title="Home" />

    <Bio></Bio>
    
    {/* <div className="home-image" style={{ width: `auto`, overflow: `auto`  }}>
      <Image/>
    </div>

    <InfoDialog1></InfoDialog1>
    <InfoDialog2></InfoDialog2>
    <InfoDialog3></InfoDialog3> */}

    
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}

    <div className="quicklookDiv" id="qlblock1"> 
        <p style={{ color: `black`, padding: `0.5rem 1rem 0`, fontWeight: `bold`, fontSize: `24px`}}>Featured projects</p>
        
        <div className="qlBlockDiv">
          <QLBlockProject></QLBlockProject>
          <QLBlockProject></QLBlockProject>
          <QLBlockProject></QLBlockProject>
        </div>
        
        <Link to="/projects"><div className="seemore"> See more projects &#8594;</div></Link>
    </div>

    <div className="quicklookDiv" id="qlblock2"> 
      <p style={{ color: `black`, padding: `0.5rem 1rem 0`, fontWeight: `bold`, fontSize: `24px`}}>Recent posts</p>
        
        <div className="qlBlockDiv">
          <QLBlockBlog></QLBlockBlog>
          <QLBlockBlog></QLBlockBlog>
          <QLBlockBlog></QLBlockBlog>
        </div>
        
        <Link to="/blog"><div className="seemore"> See more posts &#8594;</div></Link>
    </div>
  </Layout>
)

export default IndexPage
