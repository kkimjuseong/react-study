// src/components/Todo/TodoHeader.js
import React from 'react';
import './scss/TodoHeader.scss';

const TodoHeader = ({ date, tasksLeft }) => {
    const month = date.toLocaleString('ko-Kr', { month: 'long' });
    const day = date.toLocaleString('ko-Kr', { weekday: 'long' });

    return (
        <header>
            <h1>{date.getFullYear()}년 {month} {date.getDate()}일</h1>
            <div className='day'>{day}</div>
            <div className='tasks-left'>할 일 {tasksLeft}개 남음</div>
        </header>
    );
};

export default TodoHeader;
