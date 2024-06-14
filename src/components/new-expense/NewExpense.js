import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onSave }) => {

    const [isAddExpense, setIsAddExpense] = useState(false);

    const startAddingExpenseHandler = () => setIsAddExpense(true);
    const stopAddingExpenseHandler = () => setIsAddExpense(false);

    let newExpenseContent = <button onClick={startAddingExpenseHandler}>새로운 지출 추가하기</button>
    if (isAddExpense) newExpenseContent =  <ExpenseForm onAdd={onSave} onCancel={stopAddingExpenseHandler}/>


    // 새로운 지출 추가하기 클릭하면 newExpenseContent 가 렌더링 되게 만들기
    return (
        <div className="new-expense">
            {newExpenseContent}
        </div>
    );
};

export default NewExpense;