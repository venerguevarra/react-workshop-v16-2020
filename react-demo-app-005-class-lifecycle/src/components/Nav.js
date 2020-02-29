import React from 'react';

function Nav(props) {
    const nav = ['All', 'JavaScript', 'Ruby', 'Python'];
    return (<ul className="list-group">
    {   nav.map(item => {
          const className = (props.selectedMenu === item.toLowerCase())
          ? 'list-group-item active'
          : 'list-group-item';
          const lowerCaseName = item.toLowerCase();
          return (<a key={ item }
                     onClick={ () => props.handleClickMenu(lowerCaseName) }
                     className = { className }
                     href="_blank">{ item }</a>)
        })
    }
    </ul>)
}

export default Nav;