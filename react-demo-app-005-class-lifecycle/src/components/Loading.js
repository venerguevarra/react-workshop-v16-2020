import React from 'react';

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Loading'
        };
    }
    componentDidMount() {
        const stopper = this.state.text + '...';
        this.interval = window.setInterval(() => {
            this.state.text === stopper
                ? this.setState(() => ({ text: 'Loading' }))
                : this.setState((prevState) => ({ text: prevState.text + '.' }))
        }, 300)
    }
    /**
     * Remove running interval, when component is unmounted
     */
    componentWillUnmount() {
        window.clearInterval(this.interval);
    }
    render() {
        return (
            <p>
                {this.state.text}
            </p>
        )
    }
}


export default Loading;

