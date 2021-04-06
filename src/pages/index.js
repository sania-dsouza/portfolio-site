import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/homeImage"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"
import InfoDialog1 from "../components/infoDialog1"
import InfoDialog2 from "../components/infoDialog2"
import InfoDialog3 from "../components/infoDialog3"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Home</title>
      <description>Software developer based out of Toronto. I can help!</description>
      <meta name="keywords" content="sania, software development, web development, freelancer, website" />
    </Helmet>
    <SEO title="Home" keywords={ ["home", "test"] }/>
    
    <div className="home-image" style={{ width: `auto`, overflow: `auto`  }}>
      <Image/>
    </div>

    <InfoDialog1></InfoDialog1>
    <InfoDialog2></InfoDialog2>
    <InfoDialog3></InfoDialog3>
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
