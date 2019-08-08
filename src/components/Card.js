import React from "react";
import './Portfolio.css';


function Card(props) {
    return (

        <div className="foliocard">
            <a href={appLink} target="_blank">
                <img className="folioimg" src={img}
                    alt={alt} />
            </a>
            <div className="foliobanner">{appName}</div>
            <p><a href={appLink}>Site</a> | <a
                href={gitLink}>Github</a></p>
        </div>
    );
}

export default Card;