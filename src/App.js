import React, { useState } from 'react';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';
import './App.css';

// 기본 더미 데이터
const DUMMY_DATA = [
    {
        id: 'g1',
        text: '리액트 컴포넌트 스타일링 마스터하기'
    },
    {
        id: 'g2',
        text: 'UI/UX 프로그래밍 쌉고수되기'
    },
];

const App = () => {

    const [goals, setGoals] = useState(DUMMY_DATA);

    // 새로운 목표를 추가하는 함수
    const addGoalHandler = (userInput) => {
        setGoals((prevGoals) => [
            ...prevGoals,
            { id: `g${prevGoals.length + 1}`, text: userInput },
        ]);
    };

    // 목표를 삭제하는 함수
    const deleteGoalHandler = (goalsId) => {
        setGoals((prevGoals) => {
            return prevGoals.filter(goal => goal.id !== goalsId);
        });
    };

    return (
        <div>
            <section id="goal-form">
                <CourseInput onAddGoal={addGoalHandler}/>
            </section>
            <section id="goals">
                <CourseList items={goals} onDeleteGoal={deleteGoalHandler}/>
            </section>
        </div>
    );
};

export default App;