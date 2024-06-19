import React, { useState, useEffect } from 'react';
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

    // 엔터 키를 눌렀을 때 setOpen 을 토글하는 함수
    const enterToggle = (e) => {
        if (e.key === 'Enter' && e.target.tagName !== 'INPUT') {
            setOpen((prevOpen) => !prevOpen);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', enterToggle);
        return () => {
            document.removeEventListener('keydown', enterToggle);
        };
    }, []);

    const toggleForm = () => {
        setOpen(!open);
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

            <button className={`insert-btn ${open ? 'open' : ''}`} onClick={toggleForm}>
                <MdAdd />
            </button>
        </>
    );
};

export default TodoInput;
