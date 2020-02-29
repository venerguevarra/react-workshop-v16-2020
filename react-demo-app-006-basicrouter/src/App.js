import React from 'react';
import './App.css';
import BasicExample from './BasicExample';

function App() {
  return (

    <div className="App">
    <div>
        Header
      </div>
      <BasicExample/>
      <hr/>
      <BasicExample/>
      <div>
        Footer
      </div>
    </div>
  );
}

export default App;
