import React from "react";

function ShoppingList(props) {
  return (
    <div>
      <div>
        <h2>Must buy products</h2>
      </div>
      <ul>
        {props.list.map(item => {
          if (item.active === true) {
            return (
              <li key={item.name}>
                <p>
                  <span>{item.name}</span>
                  <span>
                    <button
                      onClick={() => {
                        props.onRemoveItem(item.name);
                      }}
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => {
                        props.onDeactivateItem(item.name);
                      }}
                    >
                      Deactivate
                    </button>
                  </span>
                </p>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
      <div>
        <h2>Optional products</h2>
      </div>
      <ul>
        {props.list.map(item => {
          if (!item.active) {
            return (
              <li key={item.name}>
                <p>
                  <span> {item.name} </span>
                  <span>
                    <button onClick={() => props.onRemoveItem(item.name)}>
                      Remove
                    </button>
                  </span>
                </p>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
}

export default ShoppingList;
