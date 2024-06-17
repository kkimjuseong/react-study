import React from 'react';
import './CourseItem.css';

const CourseItem = ({ item, onDelete }) => {

    const deleteHandler = e => {
        console.log('삭제해줘!');
        // 여기서 App.js에게 삭제 대상의 id를 전달
        onDelete(item.id);
    };

    return <li className="goal-item" onClick={deleteHandler}>{item.text}</li>;
};

export default CourseItem;