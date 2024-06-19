import React from 'react';

import Card from '../UI/Card';
import styles from './Home.module.css';
import Button from '../UI/Button';
import AuthContext from '../../store/auth-context';

const Home = () => {
    return (
        <AuthContext.Consumer>
            {(ctx) => {
                console.log('ctx: ', ctx);
                return (
                    <Card className={styles.home}>
                        <h1>Welcome back!</h1>
                        <Button onClick={ctx.onLogout}>Logout</Button>
                    </Card>
                );
            }}
        </AuthContext.Consumer>
    );
};

export default Home;
