import React, {useContext} from 'react';

import Card from '../UI/Card';
import styles from './Home.module.css';
import Button from '../UI/Button';
import AuthContext from '../../store/auth-context';

const Home = () => {

    const ctx = useContext(AuthContext);

    return (
        <Card className={styles.home}>
            <h1>Welcome back!</h1>
            <Button onClick={ctx.onLogout}>Logout</Button>
        </Card>
    );

};

export default Home;
