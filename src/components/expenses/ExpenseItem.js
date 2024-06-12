import React from 'react'
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({date, title, price: exPrice}) => {
    // 함수 선언
    // 1자리 숫자를 2자리수로 변환하는 함수
    const make2digit = (text) => {
        return text.toString().padStart(2, '0');
    };

    const makeFormattedDate = () => {

        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();

        return `${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;
    };

    // 원화 표기법으로 변환
    const formattedPrice = new Intl.NumberFormat('ko-KR').format(exPrice);

    // 이벤트 핸들러 선언
    const clickHandler = e =>{
        console.log('클릭함');
        console.log(e.target.previousSibling.firstElementChild.textContent);

    };

    return (
            <Card className='expense-item'>
                <ExpenseDate exDate={date}/>
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>{formattedPrice}원</div>
                </div>
                <button id='btn' onClick={clickHandler}>버튼</button>
                <button id='btn2' onMouseOver={e =>  alert('하하!') }>버튼2</button>
            </Card>
    )
}

export default ExpenseItem
