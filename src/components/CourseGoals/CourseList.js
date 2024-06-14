import React from 'react';
import './CourseList.css';
import CourseItem from "./CourseItem";

const CourseList = ({items}) => {
    return (
        <ul className='goal-list'>
            {
                items
                    .map(i => <CourseItem key={i.id} item={i} />)
            }
        </ul>
    );
};

export default CourseList;