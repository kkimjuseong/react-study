import React, { useState } from 'react';
import { MdAdd } from "react-icons/md";
import './scss/TodoInput.scss';

const TodoInput = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [open, setOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text);
            setText('');
            setOpen(false);  // 입력 후 입력창 닫기
        }
    };

    const toggleForm = () => {
        setOpen(!open);
    };

    const deleteButton = () => {
      setOpen(false);
    };


    return (
        <>
            {open && (
                <div className='form-wrapper'>
                    <form className='insert-form' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='할 일을 입력 후, 엔터를 누르세요!'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </form>
                </div>
            )}

            <button className={`insert-btn ${open ? 'open' : ''}`} onClick={toggleForm} onSubmit={deleteButton}>
                <MdAdd />
            </button>
        </>
    );
};

export default TodoInput;
