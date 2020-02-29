import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Topics from './components/Topics';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
      {name: 'Home', route: '/'},
      {name: 'About', route: '/about'},
      {name: 'Topics', route: '/topics'},
      ],
      activeMenuElement: '',
    }
    this.handleNavClick = this.handleNavClick.bind(this);
  }
  /**
   * Remember selected menu item
   * @param {string} menuElement [description]
   */
  handleNavClick(menuElement) {
    this.setState({
      activeMenuElement: menuElement
    })
  }
  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <ul className="list-group">
        {
          this.state.nav.map(item => {
            const className = (item.name === this.state.activeMenuElement)
            ? "list-group-item active"
            : "list-group-item";
            return (<Link to={ item.route } key ={ item.name} className = { className }
            onClick={() => this.handleNavClick(item.name) }>{ item.name }</Link>)
          })
        }
        </ul>
        <hr />
        <Route exact path='/' component={ Home } />
        <Route path='/about' component={ About } />
        <Route path='/topics' component={ Topics } />

      </div>
      </BrowserRouter>
    );
  }
}

export default App;