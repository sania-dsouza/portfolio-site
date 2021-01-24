import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faSnowflake, faUtensils, faPlane } from "@fortawesome/free-solid-svg-icons"

export default function infoDialog() {
    return (
        <div className="box" id="pin-1" data-cy="info-dialog">
            <div className="pin-text" >
                <span style={{ padding: ` 5px 5px `, color: `#357068`}}> <b>Toronto, Canada</b></span>
                <br/>
                <span style={{ padding: `5px 5px`, fontSize: `15px`}}>
                    Immigrated in 2019.  &nbsp; <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> &nbsp; <FontAwesomeIcon icon={faPlane}></FontAwesomeIcon><br/>
                    &nbsp; In love with poutine. &nbsp; <FontAwesomeIcon icon={faUtensils}></FontAwesomeIcon> &nbsp;  And winters. <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>
                </span>
            </div>
        </div>
    )
}
