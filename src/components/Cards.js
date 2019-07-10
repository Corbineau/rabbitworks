import React from "react";
import './Portfolio.css';

function Cards(props) {
    return (

        <div className="foliocard">
            <a href="https://corbineau.github.io/Hangman/">
                <img className="folioimg" src="./images/wormhole_clip.png"
                    alt="Spacey-Times Word Guess Game" />
            </a>
            <div className="foliobanner">Hangman</div>
            <p><a href="https://corbineau.github.io/Hangman/">Site</a> | <a
                href="https://github.com/Corbineau/Hangman/">Github</a></p>
        </div>


    );
}

export default Cards;