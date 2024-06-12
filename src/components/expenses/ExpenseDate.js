import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = ({exDate}) => {

    const month = exDate.toLocaleString('en-US', {month: 'long'});
    
    return (
        <div className="expense-date">
            <div className="expense-date__year">{exDate.getFullYear()}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{exDate.getDate()}</div>
        </div>
    );
};

export default ExpenseDate;