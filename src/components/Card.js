import React from "react";
import './Portfolio.css';


function Card(props) {
    return (

        <div className="foliocard">
            <a href={props.appLink} rel="noopener noreferrer" target="_blank">
                <img className="folioimg" src={props.img}
                    alt={props.alt} />
            </a>
            <div className="foliobanner">{props.appName}</div>
            <p><a href={props.appLink || props.vidLink} rel="noopener noreferrer" target="_blank">{props.appLink ? "Site" : "Video"}</a> | <a
                href={props.gitLink}>Github</a></p>
        </div>
    );
}

export default Card;