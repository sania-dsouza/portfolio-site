import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "personal.png" }) {
        childImageSharp {
          fluid(maxWidth: 1880) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img className="home-img" fluid={data.placeholderImage.childImageSharp.fluid} style= {{ width: `1668px`}} imgStyle= {{ objectFit: `contain` }} />
}

export default Image