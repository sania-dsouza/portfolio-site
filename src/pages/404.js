
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <div className="page-404-block" style={{
      marginTop: `7%`,
      width: `80%`,
      height: `65%`,
      margin: `0 auto`,
      position: `relative`,
      borderRadius: `20px`,
      boxShadow: `0 0 10px #357068`
    }}> 

      <div className="image-404"> 
        <img src={`banana-peel-404.jpg`} alt="banana peel" style= {{ height: `100%`, maxWidth: `55%`, position:"absolute", borderRadius: `20px 0 0 20px`}}/>
      </div>

      <div className= "text-404" style = {{
        width: `45%`,
        height: `100%`,
        backgroundColor: `white`,
        textAlign: `center`, 
        color: `#357068`,
        float: `right`,
        padding: `6% 5%`,
        fontSize:  `1.5em`,
        fontFamily: `Vollkorn`,
        borderRadius: `0 20px 20px 0`
      }}>
        <span style={{ fontWeight: `bold` }}> Oh...oh!  </span>
        <p></p>
        This is not where you want to be. 
        <p></p>
        <a href="/" style={{ color: `#357068` }}><FontAwesomeIcon icon={faHome} className="icon" size="2x" title="Home"/></a>
      </div>
      
    </div>
  
  </Layout>
)

export default NotFoundPage
