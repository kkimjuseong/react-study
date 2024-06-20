import React, { useRef, useState } from 'react';

const TimerChallenge = ({ title, targetTime }) => {

    // timer 를 ref 변수로 관리
    const timer = useRef();

    // 타이머가 시작되었는지를 확인하는 상태값
    const [timerStarted, setTimerStarted] = useState(false);

    // 타겟시간이 종료되었는지 여부
    const [timerExpired, setTimerExpired] = useState(false);

    const startHandler = e => {

        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    };

    const stopHandler = e => {
        clearTimeout(timer.current);
    };

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStarted ? stopHandler : startHandler}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    );
};

export default TimerChallenge;