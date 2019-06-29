import React from 'react';
import './styles/TheHead.css';

function TheHead() {
  return (
    <nav>
        <div class="navset">
        <div id="name">
            <h1>Rabbit Stoddard</h1>
        </div>
        <div class="navbox">
            <ul class="navlist">
                <li><a href="index.html">About Me</a> </li> |
                <li><a href="portfolio.html">Portfolio</a> </li> |
                <li><a href="contact.html">Contact</a> </li>
            </ul>
        </div>
    </div>
    </nav>

  );
}

export default TheHead;