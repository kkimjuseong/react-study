import React from 'react';
import styles from './Navigation.module.css';

const Navigation = ({onLogout}) => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <a href="/">MyPage</a>
                </li>

                <li>
                    <a href="/">admin</a>
                </li>

                <li>
                    <button onClick={onLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;