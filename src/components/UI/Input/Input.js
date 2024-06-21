import React from 'react';
import styles from './Input.module.scss';

const Input = ({ label , inputAttr }) => {
    return (
        <div className={styles.input}>
            <label htmlFor={inputAttr.id}>{label}</label>
            <input {...inputAttr} />
        </div>
    );
};

export default Input;