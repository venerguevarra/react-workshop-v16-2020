import React from 'react';
import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import Messages from './screens/Messages';
import NotFound from './notFound';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to React Router</h2>
          <div>
            <nav>
              <ul>
                <li><Link to={'/'} className="nav-link"> Home </Link></li>
                <li><Link to={'/messages'} className="nav-link">Messages</Link></li>
                <li><Link to={'/about'} className="nav-link">About</Link></li>
              </ul>
            </nav>
          </div>
          <div>
          <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/messages' component={Messages} />
                <Route path='/about' component={About} />
                <Route component={NotFound} />
            </Switch>
          </div>
          <div>
           footer
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
