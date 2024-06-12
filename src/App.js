import './App.css';
import React from "react";
import ExpenseItem from "./components/expenses/ExpenseItem";


const App = () => {

    return (
        <>
            <ExpenseItem title='치킨먹음' price={24000} date={new Date(2024,6,3)} />
            <ExpenseItem title='족발먹음' price={40000} date={new Date(2024,6,7)} />
            <ExpenseItem title='국밥먹음' price={10000} date={new Date(2024,6,12)} />
        </>
    );
}

export default App;
