import React from 'react';

function Message(props) {
  return (
    <div>
      <h1>Hello, {props.user.name}!</h1>
      <h3>Welcome, {props.user.username}</h3>
    </div>
  );
}

export default Message;
