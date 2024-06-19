import React from 'react';
import {MdDelete, MdDone} from "react-icons/md";

import './scss/TodoItem.scss';

const TodoItem = ({todo, onToggle, onDelete}) => {
    return (
        <li className='todo-list-item'>
            <div className={`check-circle ${todo.completed ? 'active' : ''}`} onClick={() => onToggle(todo.id)}>
                {todo.completed && <MdDone />}
            </div>

            <span className={`text ${todo.completed ? 'finish' : ''}`}>
                {todo.text}
            </span>

            <div className='remove' onClick={() => onDelete(todo.id)}>
                <MdDelete/>
            </div>
        </li>
    );
};

export default TodoItem;