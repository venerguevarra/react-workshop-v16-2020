import React from 'react';

class Item extends React.Component {
    state = {
        text: this.props.text
    };

    onChange = event => {
        this.setState({
            text: event.target.value
        });
    };

    render() {
        const { text } = this.state;
        return (
            <li>
                <input value={text} onChange={this.onChange} />
            </li>
        );
    }
}

export default Item;