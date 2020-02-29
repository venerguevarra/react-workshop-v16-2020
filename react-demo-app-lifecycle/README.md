1.

```
import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    state = {
        date: new Date()
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;
```

2.
```
tick() {
    this.setState({
      date: new Date()
    });
}

componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
}

componentWillUnmount() {
    clearInterval(this.timerID);
}
```