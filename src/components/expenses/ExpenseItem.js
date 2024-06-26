import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = ({ date, title, price: exPrice }) => {

    // useState 는 컴포넌트의 상태값을 관리하며 이 상태값은 렌더링에 영향을 미침
    // useState 는 배열의 형태로 날라옴
    /*
        useState 훅의 리턴값은 배열이며 각 요소들은
        1. 관리할 상태값의 초기값
        2. 해당 상태값을 변경할 땟 ㅏ용하는 setter 함수
     */
    const [itemTitle, setItemTitle] = useState(title);
    // console.log(abc);

    // 원화 표기법으로 변환
    const formattedPrice = new Intl.NumberFormat('ko-KR').format(exPrice);

    console.log('렌더링 전');
    return (
        <Card className='expense-item'>
            <ExpenseDate exDate={date} />
            <div className='expense-item__description'>
                <h2>{itemTitle}</h2>
                <div className='expense-item__price'>{formattedPrice}원</div>
            </div>
        </Card>
    )
}

export default ExpenseItem