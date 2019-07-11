import React from 'react';
import Router from './Router.js';
import TheHead from './components/TheHead';
import TheFoot from './components/TheFoot';
import './App.css';

function App() {
  return (
    <div>
          <TheHead />
      <div className="wrapper">
        <div className="another_wrapper" id="swap">
        
          <Router />
          
        </div>
      </div>
      <footer id="the-foot">
          <TheFoot />
      </footer>
    </div>
  );
}

export default App;
