import React, { useState } from 'react';
import './CourseInput.css';
import Button from '../UI/Button';

// 목표 추가 폼 컴포넌트
const CourseInput = ({ onAddGoal }) => {

    // 입력된 목표를 저장하는 상태
    const [enteredValue, setEnteredValue] = useState('');

    // 입력 값 변경 시 호출되는 핸들러
    const goalInputChangeHandler = (e) => {
        setEnteredValue(e.target.value);
    };

    // 목표 추가 버튼 클릭 핸들러
    const addGoalHandler = (e) => {
        e.preventDefault();
        onAddGoal(enteredValue);
        setEnteredValue(''); // 입력 필드 초기화
    };

    return (
        <form onClick={addGoalHandler}>
            <div className="form-control">
                <label>나의 목표</label>
                <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
            </div>
            <Button type="submit">목표 추가하기</Button>
        </form>
    );
};

export default CourseInput;
