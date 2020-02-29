import React from "react";

class Superhero extends React.Component {
    state = {
        name: "Batman"
    };
    changeName = () => {
        this.setState({
            name: "Bruce Wayne"
        });
    };
    render() {
        return <div>{this.state.name}</div>;
    }
}

export default Superhero;