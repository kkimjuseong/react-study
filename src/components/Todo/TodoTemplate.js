// src/components/Todo/TodoTemplate.js
import React, { useState } from "react";
import './scss/TodoTemplate.scss';
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoMain from "./TodoMain";

const TodoTemplate = () => {
    const [todos, setTodos] = useState([]);
    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString());

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false,
            date: new Date(),
        };
        setTodos([...todos, newTodo]);
    };

    // 컴플리트 반전을 위해 토글핸들러를 만들어야 할듯?
    // 컴플리트 만 바꿔서 만들어줘야 함
    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo

        ));
    };

    // 이전에 활용한 필터 처리하면 될듯?
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const filteredTodos = todos.filter(
        (todo) => todo.date.getFullYear().toString() === filteredYear
    );

    return (
        <div className='TodoTemplate'>
            <TodoHeader
                date={new Date()}
                tasksLeft={filteredTodos.filter(todo => !todo.completed).length}
            />
            <TodoMain
                todos={filteredTodos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
            />
            <TodoInput onAdd={addTodo} todo={filteredTodos} />
        </div>
    );
};

export default TodoTemplate;
