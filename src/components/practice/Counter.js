import React, { useState } from 'react';

const Counter = () => {

    // useState 의 setter 는 상태값을 업데이트할 때 렌더링 전까지 이전 상태값을 참조함
    // 그래서 콜백함수를 사용한다.
    const [number, setNumber] = useState(0);

    // 증가 이벤트 헨들러
    const increase = () => {
        setNumber(prevNumber => prevNumber + 1);
    };

    // 감소 이벤트 헨들러
    const decrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    };

    return (
        <div>
            <h1>숫자: {number}</h1>
            <button id='upBtn' onClick={increase}>증가</button>
            <button id='downBtn' onClick={decrease}>감소</button>
        </div>
    );
};

export default Counter;
