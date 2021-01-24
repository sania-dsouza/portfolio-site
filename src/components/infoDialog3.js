import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagic, faWind, faTemperatureHigh, faFutbol, faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons"

export default function infoDialog() {
    return (    
        <div className="box" id="pin-3" data-cy="info-dialog">
            <div className="pin-text" >
                <span style={{ padding: ` 5px 5px `, color: `#357068`}}> <b>Riffa, Kingdom of Bahrain</b></span>
                <br/>
                <span style={{ padding: `5px 5px`, fontSize: `15px`}}>
                    Lived my first 13 years in the land of pearls.<br/>
                    &nbsp; #beaches <FontAwesomeIcon icon={faUmbrellaBeach}></FontAwesomeIcon> &nbsp; &nbsp; #desert <FontAwesomeIcon icon={faWind}></FontAwesomeIcon>
                    &nbsp;&nbsp;  #hot <FontAwesomeIcon icon={faTemperatureHigh}></FontAwesomeIcon>&nbsp; &nbsp;#football <FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon>
                    &nbsp;&nbsp; #magical  <FontAwesomeIcon icon={faMagic}></FontAwesomeIcon>
                </span>
            </div>
        </div>
    )
}
