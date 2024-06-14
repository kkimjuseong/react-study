import React from 'react';
import './CourseItem.css';

const CourseItem = ({ item, onDelete }) => {
    return (
        <li className="goal-item">
            {item.text}
            <button id='btn' onClick={() => onDelete(item.id)}>삭제</button>
        </li>
    );
};

export default CourseItem;
