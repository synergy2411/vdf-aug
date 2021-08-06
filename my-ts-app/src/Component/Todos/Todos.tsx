import React from 'react';
import Todo from '../../model/todo';

const Todos : React.FC<{items : Todo[]}> = (props) => {
    return (
        <div>
            {props.items.map(item => {
                return <li key={item.id}> {item.text} </li>
            })}
        </div>
    );
}

export default Todos;
