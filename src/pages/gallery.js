import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import { Helmet } from "react-helmet"
import { faCamera, faCameraRetro } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function GalleryPage() {
  const data = useStaticQuery(
    graphql`
      query CloudinaryQuery {
        allCloudinaryMedia {
          edges {
                node {
                  secure_url
                }
              }
            }
        }
      `)

  const images = data.allCloudinaryMedia.edges
  images.map((image) => {
    //console.log("Returned from app:",image)
    var img_str = image.node.secure_url;
    let img_str_len = img_str.length
    var start = img_str.indexOf("personal-site")
    var req_str = img_str.substring(start+14, img_str_len-4);
    let location, pg;
    location = req_str.substring(0,req_str.indexOf("_"))
    location = location.replace("%2C%20", ", ");
    location = location.replace("%20", " ");
    pg = req_str.substring(req_str.indexOf("_")+1, req_str.length)
    //console.log(location, pg);
    image.location = location;
    image.pg = pg;
  })

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gallery</title>
        <link rel="canonical" href="http://localhost:8000/gallery" />
      </Helmet>
      <SEO title="Gallery" />
      
      <div style= {{ textAlign: `center`, marginTop: `1rem`, color: `#e3dcdc`, fontFamily: 'Vollkorn', fontWeight: `bold`, fontSize: `32px`}}>
        <p>Gallery</p>
      </div>
      
      <div class= "gallery" style= {{ width: `95%`, height: `100%`, margin: `auto`}}>
          {images.map(( image ) => ( 

            <div data-cy = "gallery-image" style={{position:"relative", borderRadius: "20px"}}>
              <img src = {image.node.secure_url} style= {{ width: `100%`, height: `100%`, position:"absolute", borderRadius: "20px"}}/>

              <div class="gallery_image_overlay" style={{fontSize: "22px", position:"absolute", width: `100%`, height: `100%`, borderRadius: "20px"}}>
                <b>{image.location}</b>
                <p style={{fontSize: "18px"}}><FontAwesomeIcon icon={faCameraRetro}></FontAwesomeIcon>&nbsp;&nbsp;{image.pg}</p> 
              </div>
            </div>

          ))}
          

      </div> 
      
    </Layout>
  )
}

