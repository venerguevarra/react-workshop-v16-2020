import React from "react";
import "./App.css";
import ShoppingList from "./ShoppingList";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        { name: "Item 1", active: true },
        { name: "Item 2", active: true },
        { name: "Item 3", active: false },
        { name: "Item 4", active: true }
      ],
      input: ''
    };

    //this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleClearAll = this.handleClearAll.bind(this);
    this.handleToDeactivate = this.handleToDeactivate.bind(this);
    this.handleEnterPress = this.handleEnterPress.bind(this);
  }

  /**
   * Adds grocery item to the list
   */
  handleAddItem() {
    if (this.state.input.trim() !== "") {
      this.setState(currentState => {
        return {
          list: currentState.list.concat([
            { name: currentState.input, active: true }
          ]),
          input: ""
        };
      });
    }
  }

  handleRemoveItem(itemName) {
    this.setState(currentState => {
      return {
        list: currentState.list.filter(el => el.name !== itemName)
      };
    });
  }

  updateInput(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleClearAll() {
    this.setState({
      list: [],
      input: ""
    });
  }

  handleToDeactivate(itemName) {
    this.setState(currentState => {
      return {
        list: currentState.list.map(el => {
          return el.name === itemName
            ? { name: el.name, active: !el.active }
            : { name: el.name, active: el.active };
        })
      };
    });
  }

  handleEnterPress(e) {
    if (e.keyCode === 13) {
      this.handleAddItem();
    }
  }

  render() {
    return (
      <div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter product name"
            value={this.state.input}
            onChange={this.updateInput}
            onKeyDown={this.handleEnterPress}
          />
          <div>
            <button type="button" onClick={this.handleAddItem}>
              Add product
            </button>
            <button type="button" onClick={this.handleClearAll}>
              Clear all
            </button>
          </div>
        </div>
        <ShoppingList
          onRemoveItem={this.handleRemoveItem}
          onDeactivateItem={this.handleToDeactivate}
          list={this.state.list}
        />
      </div>
    );
  }
}

export default App;
