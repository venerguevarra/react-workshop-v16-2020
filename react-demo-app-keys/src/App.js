import React from 'react';
import './App.css';
import { EmployeeList } from './components/Employee';
import Item from './components/Item';

class ItemContainer extends React.Component {
  state = {
    items: [
      {
        text: "First",
        id: 1
      },
      {
        text: "Second",
        id: 2
      }
    ]
  };

  addItem = () => {
    const items = [{ text: "Front", id: Date.now() }, ...this.state.items];
    this.setState({ items });
  };

  render() {
    return (
      <div>
         <ul>
          {this.state.items.map((item, index) => (
            <Item {...item} key={index} />
          ))}
        </ul>
        <button onClick={this.addItem}>Add Item</button>
      </div>
    );
  }
}

function App() {


  return (
    <div>
      <EmployeeList/>
      <br/>
      <ItemContainer/>
    </div>
  );
}

export default App;
