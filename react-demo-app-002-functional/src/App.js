import React from 'react';
import './Message';
import './App.css';
import Message from './Message';

const USER_DATA = {
  username: "vener.guevarra",
  name: "Vener Guevarra"
}

function App() {
  return (
    <div className="App">
      <header className="App-header"/>
      <Message user={USER_DATA} />
    </div>
  );
}

export default App;
