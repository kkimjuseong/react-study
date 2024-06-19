import React from 'react';
import styles from './Navigation.module.css';
import AuthContext from '../../store/auth-context';

const Navigation = () => {

    const loginPage =  (onLogout) => (
        <>
            <li>
                <a href="/">MyPage</a>
            </li>
            <li>
                <a href="/">Admin</a>
            </li>
            <li>
                <button onClick={onLogout}>Logout</button>
            </li>
        </>
    );

    const anonymousPage = <li><button>Sign Up</button></li>

    return (
        <AuthContext.Consumer>
            {({ isLoggedIn, onLogout}) => {
                // console.log(context);
                return (
                    <nav className={styles.nav}>
                        <ul>
                            {isLoggedIn ? loginPage(onLogout) : anonymousPage}
                        </ul>
                    </nav>
                );
            }}
        </AuthContext.Consumer>
    );
};

export default Navigation;
