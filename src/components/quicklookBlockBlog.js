import React from "react"
import { Link } from "gatsby"
export default function BlogBlock() {

    return (
        <div className="quicklookBlockBlog">
            <div className="blogText">
                <div className="blogImage">
                    <img src="../images/devTO.png" alt="test image"/>
                </div>
                <Link to="/">
                    <div className="blogTitle" data-cy="project-title" style= {{ fontWeight: `bold`, fontSize: `24px`, color: `#6f37a3`}}> Blog post title </div>
                </Link>
                <small> 2 min read</small>
                <p className="blogDesc" style= {{ fontSize: `0.85em`, color: `#6f37a3`, padding: `0 1em 0 0`}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.   </p>                    
            </div>
        </div>
    )
}
