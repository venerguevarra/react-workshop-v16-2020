import React from 'react';

function Message(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <h3>Welcome, {props.username}</h3>
    </div>
  );
}

export default Message;
