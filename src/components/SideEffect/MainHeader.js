import React from 'react';
import styles from './MainHeader.module.css';
import Navigation from "./Navigation";

const MainHeader = ({onLogout}) => {
    return (
        <header className={styles['main-header']}>
            <h1>나의 리액트 페이지</h1>
            <Navigation onLogout={onLogout} />
        </header>
    );
};

export default MainHeader;