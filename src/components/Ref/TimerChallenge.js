import React, {useState} from 'react';

const TimerChallenge = ({title, targetTime}) => {

    // 타이머가 시작되었는지를 확인하는 상태값
    const [timerStarted, setTimerStarted] = useState(false);

    // 타겟시간이 종료되었는지 여부
    const [timerExpired, setTimerExpired] = useState(false);

    let timer;
    const startHandler = (e) => {

        timer = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(prevState => !prevState);
    };

    // 이 상황에 스톱이 작동하지 않은 이유는 start 시의 타이머 변수가 지역변수이기 때문에
    // 상태변수의 세터 호출시 리렌더링이 되면서 새로운 지역변수로 바뀐다.
    // 스톱 시의 타이머와 스타트시의 타이머 변수는 다른 변수이다.
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