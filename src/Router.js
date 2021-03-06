import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Nah from './components/Nah';


class Router extends Component {
    render() {
      const Router = () => (
        <div>
          <Switch>
            <Route exact path='/' component={Bio}/>
            <Route path='/index' component={Bio}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/portfolio' component={Portfolio}/>
            <Route path='*' component={Nah}/>
          </Switch>
        </div>
      )
      return (
        <Switch>
          <Router/>
        </Switch>
      );
    }
  }
  
  export default Router;