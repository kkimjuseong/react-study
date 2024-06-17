import React, { useState } from 'react';
import styles from './CourseInput.module.css';
import Button from '../UI/Button';

const CourseInput = ({ onAdd }) => {

    // console.log('s: ', styles);

    const { invalid, "form-control": formControl } = styles;

    // 목표 인풋에 입력한 값
    const [enteredText, setEnteredText] = useState('');

    // 입력값 검증을 통과했는지 여부를 상태관리
    const [isValid, setIsValid] = useState(true);

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (enteredText.trim().length === 0) {
            setIsValid(false);
            return;
        }

        const newGoalObject = {
            id: Math.random().toString(),
            text: enteredText,
        };
        // console.log(newGoalObject);

        onAdd(newGoalObject);

        setEnteredText('');
    };

    const goalChangeHandler = (e) => {

        const inputValue = e.target.value;

        // 입력값 검증
        if (inputValue.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredText(inputValue);
    };


    const foo = () => {

        const arr = [1,2,3,4,5,6,700000000];

        // 렌더링이 된 요소
        const $ul = document.querySelector('ul.abc');

        // 중간 가상 DOM 생성
        const $div = document.createDocumentFragment();

        arr.forEach(n => {
            // 아직 렌더링이 되지 않은 요소 : virtual DOM
            const $li = document.createElement('li');
            $li.textContent = n;
            // 렌더링된 곳에 렌더링되지않은 요소를 추가 : 성능상 좋지 않다.
            $div.appendChild($li);
        });

        $ul.appendChild($div);
    };


    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`${formControl} ${!isValid ? invalid : ''}`}>
                <label>나의 목표</label>
                <input
                    type="text"
                    onChange={goalChangeHandler}
                    value={enteredText}
                />
            </div>
            <Button type="submit">목표 추가하기</Button>
        </form>
    );
};

export default CourseInput;