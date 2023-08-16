import React, {useEffect} from 'react';
import styles from './styles.module.css';
import NavBar from './NavBar';
import Grid from './Grid';
import Players from './Players'
import DisplayWinnerDialog from './DisplayWinnerDialog';

function Game() {

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.backgroundColor = '#FCFCFC';
    }, [])

    return(
        <main className={styles.container}>
            <NavBar/>
            <Grid/>
            <Players/>
            <DisplayWinnerDialog/>
        </main>
    )
}

export default Game;
