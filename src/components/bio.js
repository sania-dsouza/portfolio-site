import React from "react"
import Image from "./homeImage"
import { Link } from "gatsby"
import Contact from "./contact"

export default function Bio() {
    return (
        <div className= "bioWrapper">
            <div className="bioImage">
                {/* <img src="test.png" alt="bio-image" title="bio-image" /> */}
                <Image />
                </div>

            <div className="bioDesc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
                
                <br /> <br/>
                
                <Link to="/projects"> 
                    <button className="bioButton" id="projectsButton"> Projects </button>
                </Link>
                
                <Link to="/blog">
                    <button className="bioButton" id="blogButton"> Blog </button>
                </Link>
                
                <Link to="https://drive.google.com/file/d/1fQuZUfnP_i9tRplF8Vfj3jDBx-3KZfr1/view?usp=sharing" target="_blank">
                    <button className="bioButton" id="resumeButton">  Resume </button>
                </Link>
                
                <Contact />
                
                {/* <Link to="/">
                    <button className="bioButton" id="resumeButton"> Resume </button>
                </Link>
            
                <Link to="mailto:sania.dsouza2012@gmail.com"> 
                    <button className="bioButton" id="email"> Email me </button>
                </Link>
                
                <Link to="https://ca.linkedin.com/in/saniadsouza">
                    <button className="bioButton" id="linkedin"> Linkedin </button>
                </Link> */}
            </div>
        </div>
    )
}

