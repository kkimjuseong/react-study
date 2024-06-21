import React from 'react';
import CartContext from "./CartContext";

const CartProvider = ({children}) => {
    return (
        <CartContext.Provider value={}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;