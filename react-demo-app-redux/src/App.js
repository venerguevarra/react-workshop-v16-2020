import React, { Component } from 'react';
import PostForm from './components/PostForm';
import AllPost from './components/AllPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h2 className="center ">Post It</h2>
          </div>
          <PostForm />
          <AllPost />
      </div>
      );
    }
  }
export default App;