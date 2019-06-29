import React from 'react';
import Router from './Router.js';
import TheHead from './components/TheHead';
import TheFoot from './components/TheFoot';
import './App.css';

function App() {
  return (
    <container>
          <TheHead />
      <div class="wrapper">
        <div class="another_wrapper" id="swap">
          <Router />
        </div>
      </div>
      <footer id="the-foot">
          <TheFoot />
      </footer>
    </container>
  );
}

export default App;
