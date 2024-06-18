import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
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
                    <a href="/">Logout</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;