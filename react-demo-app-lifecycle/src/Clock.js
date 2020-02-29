import React from 'react';
import LoginControl from './LoginControl';

class Clock extends React.Component {
    state = {
        date: new Date()
    }

    tick() {
        // Wrong
        // this.setState({
        //    counter: this.state.counter + this.props.increment,
        //});

        // Correct
        // this.setState((state, props) => ({
        //    counter: state.counter + props.increment
        // }));
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

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <br/>
                <LoginControl/>
            </div>
        );
    }
}

export default Clock;