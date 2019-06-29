import React from 'react';
import './theHead.css';

function TheHead() {
  return (
    <nav>
        <div class="navset">
        <div id="name">
            <h1>Rabbit Stoddard</h1>
        </div>
        <div class="navbox">
            <ul class="navlist">
                <li><a href="/index">About Me</a> </li> |
                <li><a href="/portfolio">Portfolio</a> </li> |
                <li><a href="/contact">Contact</a> </li>
            </ul>
        </div>
    </div>
    </nav>

  );
}

export default TheHead;