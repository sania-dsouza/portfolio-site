import React from "react"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaby, faBabyCarriage, faHeart, faHome } from "@fortawesome/free-solid-svg-icons"

config.autoAddCss = false;

export default function infoDialog() {
    return (    
        <div className="box" id="pin-2" data-cy="info-dialog">
            <div className="pin-text" >
                <span style={{ padding: ` 5px 5px `, color: `#357068`}}> <b>Delhi, India</b></span>
                <br/>
                <span style={{ padding: `5px 5px`, fontSize: `15px`}}>
                    <FontAwesomeIcon icon={faBabyCarriage}></FontAwesomeIcon> &nbsp; Born and partly brought up in coastal India.&nbsp;  <br/>
                    &nbsp;&nbsp;<FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> &nbsp;  Home is where the heart is. &nbsp; 
                </span>
            </div>
        </div>
    )
}
