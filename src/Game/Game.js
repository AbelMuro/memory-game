import React, {useEffect} from 'react';
import styles from './styles.module.css';
import NavBar from './NavBar';
import Grid from './Grid';

function Game() {

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.backgroundColor = '#FCFCFC';
    },[])

    return(
        <main className={styles.container}>
            <NavBar/>
            <Grid/>
        </main>
    )
}

export default Game;
