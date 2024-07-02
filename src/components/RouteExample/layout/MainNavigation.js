import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainNavigation.Module.scss';

const MainNavigation = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation