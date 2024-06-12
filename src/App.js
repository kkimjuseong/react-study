import './App.css';
import React from "react";
import Hello from './components/Hello';
import Bye from "./components/Bye";
import Greet from "./components/Greet";

function App() {

    // jsx 문법
    // const $h2 = React.createElement('h2', null, '방가방가');
    // const $h2 = <h2>방가방가 우리친구 햄토리</h2>

    // jsx 규칙
    // 1. return 태그안에있는 태그는 반드시 하나의 태그로 묶여야함
    // 2. 빈 태그(닫는 태그가 없는) 는 반드시 /> 로 마감해야함
    // 3. 태그의 class 속성은 자바스크립트 키워드 class 와 겹쳐서 className 으로 표기
    // 4. 의미없는 부모는 React.Fragment 로 묶으면 된다. -> 축약표현 <> 로 가능
    // 5. 변수값이나 함수를 출력할 때는 {}로 감싸면 된다.


    return (
        <>
            <Hello/>
            <Greet/>
            <Bye/>
        </>
    );
}

export default App;
