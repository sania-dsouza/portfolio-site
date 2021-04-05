import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"

export default function ProjectBlock() {

    // const data = useStaticQuery(
    //     graphql`
    //       query GithubQuery {
    //         allGithubData {
    //           nodes {
    //             data {
    //               user {
    //                 repositories {
    //                   nodes {
    //                     description
    //                     name
    //                     url
    //                     primaryLanguage {
    //                       name
    //                     }
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       }
    //     `)
        
    // const repos = data.allGithubData.nodes[0].data.user.repositories.nodes

    return (

        // repos.map(repo => 

            <div style = {{
                margin: `auto`,
                fontFamily: `Roboto Condensed`,
                border: `1px solid`,
                width: `70%`,
                height: `100%`,
                borderRadius: `25px`,
                backgroundColor: `#ffffff`,
                color: `#2dc592 `,
                position: `relative`,
                }} className= "projBlock">
                
                <div className= "projImage">
                  <img width= "100%" height="100%" style={{ borderRadius: `25px 0 0 25px` }} src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Kimi_Raikkonen_2006_test.jpg" alt="test project"/>
                </div>

                <div style={{ width: `45%`, float: `right`, margin: `0.25rem`}}>
                  <div data-cy="project-title" style= {{ fontWeight: `bold`, fontSize: `24px`, color: `#357068` }}> Test project title </div>
                  <div data-cy="project-description" style= {{ fontSize: `15px` }}> Test description </div>
                  
                  <div data-cy="project-tech"> Python </div>

                  <div data-cy="project-indiv-link" style = {{ position: `absolute`, bottom: `0`, fontSize: `16px`, fontWeight: `bold`, width: `100%`}}> 
                      <div className= "siteLink"> <a href="/" style= {{ color: `#357068`}}><p>Go to project <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p></a></div>
                      {/* <div className="siteLink"> <p> {repo.primaryLanguage.name} </p></div> */}
                  </div>
                </div>
                
                
            </div>
        )
    //)
}

