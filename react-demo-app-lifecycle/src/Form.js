import React from 'react';

class Form extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        description: "",
        fruit: "",
        isGoing: "",
        numberOfGuests: "",
        gender: ""
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            description: "",
            fruit: "",
            isGoing: "",
            numberOfGuests: "",
            gender: ""
        });
    };

    render() {
        return (
            <form>
                <input
                    name="firstName"
                    placeholder="First name"
                    value={this.state.firstName}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="lastName"
                    placeholder="Last name"
                    value={this.state.lastName}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={e => this.change(e)}
                />
                <br />
                <label>Description</label>
                <br />
                <textarea
                    name="description"
                    value={this.state.value}
                    onChange={e => this.change(e)}
                />
                <br />
                <select name="fruit" value={this.state.value} onChange={e => this.change(e)}>
                    <option value="grapes">Grapes</option>
                    <option value="banana">Banana</option>
                    <option value="mango">Mango</option>
                </select>
                <br />
                Is Going?
                <input
                    name="isGoing"
                    type="checkbox"
                    checked={this.state.isGoing}
                    onChange={e => this.change(e)} />
                <br />
                Number of guests:
                <input
                    name="numberOfGuests"
                    type="number"
                    value={this.state.numberOfGuests}
                    onChange={e => this.change(e)} />
                <br />
                <input
                    name="gender"
                    type="radio"
                    value="male"
                    checked={this.state.gender === "Yes"}
                    onChange={e => this.change(e)} />Male

                <input
                    name="gender"
                    type="radio"
                    value="female"
                    checked={this.state.gender === "No"}
                    onChange={e => this.change(e)}/>Female
                <br />
                <button onClick={this.onSubmit}>Submit</button>
            </form>
        );
    }
}

export default Form;