import React, {useState} from 'react';


let timer;
const TimerChallenge = ({title, targetTime}) => {

    // 타이머가 시작되었는지를 확인하는 상태값
    const [timerStarted, setTimerStarted] = useState(false);

    // 타겟시간이 종료되었는지 여부
    const [timerExpired, setTimerExpired] = useState(false);

    const startHandler = (e) => {

        timer = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(prevState => !prevState);
    };

    // 전역변수로 timer 설정시 5초 -> 1초 -> 1초 -> 5초를 연속클릭해보면 5초짜리 timer 가 정상작동하지 않는 이유는
    // 4개의 TimeChallenge 컴포넌트가 1개의 timer 를 공유하여 처음 5초짜리 timer 가 1초짜리에 의해 덮어지기기 때문
    const stopHandler = () => {
        clearTimeout(timer);
    };

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost!!</p>}
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