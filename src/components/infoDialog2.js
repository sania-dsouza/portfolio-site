import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaby, faBabyCarriage, faHeart, faHome } from "@fortawesome/free-solid-svg-icons"

export default function infoDialog() {
    return (    
        <div className="box" id="pin-2" data-cy="info-dialog">
            <div className="pin-text" >
                <span style={{ padding: ` 5px 5px `, color: `#357068`}}> <b>Delhi, India</b></span>
                <br/>
                <span style={{ padding: `5px 5px`, fontSize: `15px`}}>
                    Born and partly brought up in coastal India.&nbsp; <FontAwesomeIcon icon={faBabyCarriage}></FontAwesomeIcon> <br/>
                    &nbsp;  Home is where the heart is. &nbsp; <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> &nbsp; <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                </span>
            </div>
        </div>
    )
}
