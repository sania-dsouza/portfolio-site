import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image"

export default function ProjectBlock() {

    const data = useStaticQuery(
        graphql`
            query ProjectQuery {
                project: allMarkdownRemark(filter: {fields: {collection: {eq: "projects"}}}) {
                    repos: nodes {
                        frontmatter {
                            title
                            date
                            featuredImage {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            tech
                            link
                        }
                        excerpt(pruneLength: 250)
                    }
                }
            }
    `)

    const { repos } = data.project

    return (

        repos.map(repo => 

            <div style = {{
                margin: `auto`,
                fontFamily: `Roboto Condensed`,
                border: `1px solid`,
                height: `100%`,
                borderRadius: `25px`,
                backgroundColor: `#ffffff`,
                color: `#2dc592 `,
                position: `relative`,
                }} className= "projBlock">
                
                <div className= "projImage">
                  <Img style={{ width: `100%`, height: `100%`, borderRadius: `25px 0 0 25px` }} imgStyle= {{ objectFit: `cover` }} fluid={ repo.frontmatter.featuredImage.childImageSharp.fluid } />
                </div>

                <div className="projText">
                  <div className="projTitle"> <a href={ repo.frontmatter.link } style= {{ color: `#357068`}}> { repo.frontmatter.title } </a> </div>
                  <div className="projTech"> <span style={{ fontSize: `20px` }}>&middot;</span> { repo.frontmatter.tech } </div>
                  
                  <div className="projDesc"> { repo.excerpt } </div>
                  
                  <div data-cy="project-indiv-link" style = {{ position: `absolute`, bottom: `0`, fontSize: `0.85em`, fontWeight: `bold`, width: `100%`}}> 
                      <div className= "siteLink"> <a href={ repo.frontmatter.link } style= {{ color: `#357068`}}><p>Go to project <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p></a></div>
                      {/* <div className="siteLink"> <p> {repo.primaryLanguage.name} </p></div> */}
                  </div>
                  
                </div>
                
                
            </div>
        )
    )
}

