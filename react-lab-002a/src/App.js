import React from 'react';

function ListItem(props){
  return <li>{props.item}</li>
}



function ShoppingTitle(props){
  return (
      <div>
          <h1>{props.title}</h1>
          <h2>Total Number of Items: {props.numItems}</h2>
      </div>

  )
}


function ShoppingList(props){
  return (
      <div>
          <h3>{props.header}</h3>
          <ol>
              <ListItem item = {props.items[0]}/>
              <ListItem item = {props.items[1]}/>
              <ListItem item = {props.items[2]}/>
          </ol>
      </div>
  )
}


function ShoppingApp(props){

  return (
      <div>
          <ShoppingTitle title = "My Shopping List" numItems = "9"/>
          <ShoppingList header = "Food" items = {[ "Apple","Bread","Cheese"]}/>
          <ShoppingList header = "Clothes" items = {[ "Shirt","Pants","Hat"]}/>
          <ShoppingList header = "Supplies" items = {[ "Pen","Paper","Glue"]}/>
      </div>
  )
}


function App() {
  return (
    <ShoppingApp/>
  );
}

export default App;
