import {createContext} from 'react';

// 장바구니에 관련된 상태값들을 관리하는 컨텍시트 (저장서)

// 매겨변수에 전달하는 객체는 상태들을 정의하는 개념
const CartContext = createContext({
    cartItems: [],          // 장바구니 배열
    addItem: (ite) => {},      // 장바구나에 상품을 추가하는 함수
    removeItem: (id) => {},   // 장바구니에서 상품을 제거하는 함수

});

export default CartContext;