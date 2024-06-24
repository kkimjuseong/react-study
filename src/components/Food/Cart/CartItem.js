import React, { useContext } from 'react';
import styles from './CartItem.module.scss';
import CartContext from '../../../store/Cart-context';

const CartItem = ({ cart }) => {
    const { addItem, removeItem } = useContext(CartContext);

    const cartAddHandler = () => {
        const item = {
            ...cart,
            amount: 1,
        };
        addItem(item);
    };

    const cartRemoveHandler = () => {
        removeItem(cart.id);
    };

    const { name, price, amount } = cart;

    const {
        'cart-item': cartItem,
        summary,
        price: priceStyle,
        amount: amountStyle,
        actions
    } = styles;

    const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

    return (
        <li className={cartItem}>
            <div>
                <h2>{name}</h2>
                <div className={summary}>
                    <span className={priceStyle}>{formatPrice}</span>
                    <span className={amountStyle}>x {amount}</span>
                </div>
            </div>
            <div className={actions}>
                <button onClick={cartRemoveHandler}>−</button>
                <button onClick={cartAddHandler}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
