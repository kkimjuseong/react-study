import React from 'react';
import styles from './MealItem.module.scss';
import MealItemForm from './MealItemForm';

const MealItem = ({id, price, description, name}) => {

    const { meal, description: desc, price: priceStyle } = styles;

    const formatPrice = new Intl.NumberFormat("ko-KR").format(price);

    // MealItemForm 에서 선택한 수량값을 끌어올려줄 함수
    const addToCartHandler = (amount) => {

        // 장바구니에 보낼 객체
        const item = {
            id: id,
            name: name,
            amount: +amount,
            price: price
        }
        console.log(item)

    };

    return (
        <li className={meal}>
            <div>
                <h3>{name}</h3>
                <div className={desc}>{description}</div>
                <div className={priceStyle}>{formatPrice}원</div>
            </div>
            <div>
                <MealItemForm id={id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );
};

export default MealItem;
