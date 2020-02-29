import React from 'react';
import './App.css';

class Foo extends React.Component {
  state = {
    superhero: 'batman'
  }

  constructor( props ){
    super( props );
    // comment bind and see what will happen
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    alert(this.state.superhero);
  }

  render(){
    return (
      <div>
        <button type="button" onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

class Bar extends React.Component {
  state = {
    name: '',
    description: '',
  }

  handleChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  }

  display = event => {
    alert(this.state.name + " " + this.state.description);
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange('name')}/>
        <span>name: {this.state.name}</span>
        <br/>
        <input onChange={this.handleChange('description')}/>
        <span>name: {this.state.description}</span>
        <br/>
        <button type="button" onClick={this.display}>Click Me</button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Foo/>
      <Bar/>
    </div>
  );
}

export default App;
