
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />

    <div className="page-404-block" style={{
      marginTop: `7%`,
      width: `80%`,
      height: `65%`,
      margin: `0 auto`,
      position: `relative`,
      borderRadius: `20px`,
      boxShadow: `0 0 10px #357068`
    }}> 

      <div className= "text-404" style = {{
        width: `100%`,
        height: `100%`,
        backgroundColor: `white`,
        textAlign: `center`, 
        color: `#357068`,
        float: `right`,
        padding: `6% 5%`,
        fontSize:  `1.5em`,
        fontFamily: `Vollkorn`,
        borderRadius: `20px`
      }}>
        <span style={{ fontWeight: `bold` }}> Oh...oh!  </span>
        <br/>
        This is not where you want to be. 
        <br/>
        Go to:
        <Link href="/" style={{ color: `#357068` }}>
          <div style={{ padding: `0.5rem`, textDecoration: `underline`, fontWeight: `bold`}}>Home</div>
        </Link>

        <Link href="/projects" style={{ color: `#357068` }}>
          <div style={{ padding: `0.5rem`, textDecoration: `underline`, fontWeight: `bold`}}>Projects</div>
        </Link>

        <Link href="/blog" style={{ color: `#357068` }}>
          <div style={{ padding: `0.5rem`, textDecoration: `underline`, fontWeight: `bold`}}>Blog</div>
        </Link>
      </div>
      
    </div>
  
  </Layout>
)

export default NotFoundPage
