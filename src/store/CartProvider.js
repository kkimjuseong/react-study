import React, {useContext} from 'react';
import CartContext from "./CartContext";

const defaultState = {
  items: []        // 장바구니 배열
};

// reducer : 여러가지 복잡한 상태관리를 단순화 시키며 중앙집중화 한다.
// 리듀서 함수 정의
// state:   업데이트 이전의 상태
// action:  어떤 업데이트를 하는지에 대한 정보와 업데이트에 필요한 값을 가진 객체
const cartReducer = (state, action) => {

    if (action.type === 'ADD'){ // 장바구니에 추가
        // 상태를 업데이트 하는 코드

        return null;    // 새로운 상태
    } else if(action.type === 'REMOVE'){    // 장바구니에서 제거

        return null;    // 새로운 상태
    }
    return defaultState;    // 새로운 상태
};

const CartProvider = ({children}) => {


    // Provider 가 실제로 관리할 상태들의 구체적인 내용들
    const cartContext = {
        cartItem: [],               // 상태값
        addItem: item => {},        // 상태를 업데이트 하는 함수
        removerItem: id => {},      // 상태를 업데이트 하는 함수
    }
    return (
        <CartContext.Provider value={{cartContext}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;