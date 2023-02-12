import React from "react";
import './Portfolio.css';


function Cards(props) {
    return (

        <div className="foliocard">
            <a href={appLink} target="_blank" rel="noopener noreferrer">
                <img className="folioimg" src={img}
                    alt={alt} />
            </a>
            <div className="foliobanner">{appName}</div>
            <p><a href={appLink}>Site</a> | <a
                href={gitLink}>Github</a></p>
        </div>


    );
}

export default Cards;