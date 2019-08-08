import {React, Component}from "react";
import Cards from './Cards'
import './Portfolio.css';


//TODO: re-write this to make the folioCards repeatable components.

class Portfolio extends Component {
    state={
        
    }

    componentDidMount() {

    }

    render (
        <div className="content">
            <div className="content">
                <header>
                    <h1>Portfolio</h1>
                </header>
                <Card />
                <div className="bio foliobox">
                    <div className="foliocard">
                        <a href="https://corbineau.github.io/Hangman/">
                            <img className="folioimg" src="./images/wormhole_clip.png"
                                alt="Spacey-Times Word Guess Game" />
                        </a>
                        <div className="foliobanner">Hangman</div>
                        <p><a href="https://corbineau.github.io/Hangman/">Site</a> | <a
                            href="https://github.com/Corbineau/Hangman/">Github</a></p>
                    </div>


                    <div className="foliocard">
                        <a href="https://corbineau.github.io/Battle-RPG/">
                            <img className="folioimg" src="./images/paranoia.png"
                                alt="Table Top RPGs actually battling!" />
                        </a>
                        <div className="foliobanner">RPG Battle</div>
                        <p><a href="https://corbineau.github.io/Battle-RPG/">Site</a> | <a
                            href="https://github.com/Corbineau/Battle-RPG/">Github</a></p>
                    </div>
                    <div className="foliocard">
                        <a href="https://corbineau.github.io/Trivia-Game/">
                            <img className="folioimg" src="./images/trivia.jpg" alt="Trivia about Trivia" />
                        </a>
                        <div className="foliobanner">Meta-Trivia</div>
                        <p><a href="https://corbineau.github.io/Trivia-Game/">Site</a> | <a
                            href="github.com/Corbineau/Trivia-Game/">Github</a></p>
                    </div>
                    <div className="foliocard">
                        <a href="https://corbineau.github.io/Poetry/">
                            <img className="folioimg" src="./images/poetry.jpeg" alt="Simple poetry generator" />
                        </a>
                        <div className="foliobanner">Poetry</div>
                        <p><a href="https://corbineau.github.io/Poetry/">Site</a> | <a
                            href="https://github.com/Corbineau/Poetry/">Github</a></p>
                    </div>
                    <div className="foliocard">
                        <a href="https://corbineau.github.io/Memetic/">
                            <img className="folioimg" src="./images/labs.gif" alt="Make mine memetic" />
                        </a>
                        <div className="foliobanner">Memetic</div>
                        <p><a href="https://corbineau.github.io/Memetic/">Site</a> | <a
                            href="https://github.com/Corbineau/Memetic/">Github</a></p>
                    </div>
                    <div className="foliocard">
                        <a href="https://corbineau.github.io/ItsAmazing/">
                            <img className="folioimg" src="./images/icons.png" alt="Hi Human" />
                        </a>
                        <div className="foliobanner">Hi Human</div>
                        <p><a href="https://hihuman.herokuapp.com">Site</a> | <a
                            href="https://github.com/Corbineau/ItsAmazing/">Github</a></p>
                    </div>
                    <div className="foliocard">
                        <a href="https://corbineau.github.com/Liri/">
                            <img className="folioimg" src="./images/liricast.png" alt="search for meaning" />
                        </a>
                        <div className="foliobanner">Liri</div>
                        <p><a href="https://asciinema.org/a/AFY1EoEVLay1K9tBK6RLKMhic">Video</a> | <a
                            href="https://github.com/Corbineau/Liri/">Github</a></p>
                    </div>
                    <div className="foliocard">
                        <a href="https://corbineau.github.com/shopofmanythings/">
                            <img className="folioimg" src="./images/Screen Shot 2019-05-24 at 5.47.17 PM.png" alt="upgrade your gear" />
                        </a>
                        <div className="foliobanner">Shop of Many Things</div>
                        <p><a href="#">Video</a> | <a
                            href="https://github.com/Corbineau/shopofmanythings/">Github</a></p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Portfolio;