import React from "react"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagic, faWind, faTemperatureHigh, faFutbol, faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons"

config.autoAddCss = false;

export default function infoDialog() {
    return (    
        <div className="box" id="pin-3" data-cy="info-dialog">
            <div className="pin-text" >
                <span style={{ padding: ` 5px 5px `, color: `#357068`}}> <b>Riffa, Kingdom of Bahrain</b></span>
                <br/>
                <span style={{ padding: `5px 5px`, fontSize: `15px`}}>
                    Lived my first 13 years in the land of pearls.<br/>
                    &nbsp;&nbsp;<FontAwesomeIcon icon={faUmbrellaBeach}></FontAwesomeIcon> #beaches  &nbsp; <FontAwesomeIcon icon={faWind}></FontAwesomeIcon> #desert 
                    &nbsp;&nbsp;<FontAwesomeIcon icon={faTemperatureHigh}></FontAwesomeIcon> #hot    &nbsp; <FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon>#football 
                    &nbsp;&nbsp;<FontAwesomeIcon icon={faMagic}></FontAwesomeIcon>#magical  
                </span>
            </div>
        </div>
    )
}
