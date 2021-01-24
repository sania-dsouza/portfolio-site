import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useStaticQuery } from "gatsby"
import React from "react"

export default function ProjectBlock() {

    const data = useStaticQuery(
        graphql`
          query GithubQuery {
            allGithubData {
              nodes {
                data {
                  user {
                    repositories {
                      nodes {
                        description
                        name
                        url
                        primaryLanguage {
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `)
        
    const repos = data.allGithubData.nodes[0].data.user.repositories.nodes

    return (

        repos.map(repo => 

            <div style = {{
                margin: `1.5rem 1rem 1rem 2rem`,
                padding: `1rem 1.5rem`,
                fontFamily: `Roboto Condensed`,
                border: `1px solid`,
                height: `100%`,
                borderRadius: `25px`,
                backgroundColor: `#ffffff`,
                color: `#2dc592 `,
                position: `relative`,
                }} className= "projBlock">
                
                <div data-cy="project-title" style= {{ fontWeight: `bold`, fontSize: `24px`, color: `#357068` }}> {repo.name} </div>
                <div data-cy="project-description" style= {{ fontSize: `15px` }}> {repo.description} </div>
                
                <div data-cy="project-indiv-link" style = {{ position: `absolute`, bottom: `0`, fontSize: `16px`, fontWeight: `bold`, width: `100%`}}> 
                    <div className= "siteLink"> <a href={repo.url} style= {{ color: `#357068`}}><p>Go to project <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p></a></div>
                    {/* <div className="siteLink"> <p> {repo.primaryLanguage.name} </p></div> */}
                </div>

                
                
            </div>
        )
    )
}

