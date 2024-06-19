// src/components/Todo/TodoMain.js
import React from 'react';
import './scss/TodoMain.scss';
import TodoItem from "./TodoItem";

const TodoMain = ({ todos, onToggle, onDelete }) => {
    return (
        <ul className='todo-list'>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
};

export default TodoMain;
