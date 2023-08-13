import React, {useEffect} from 'react';
import styles from './styles.module.css';
import NavBar from './NavBar';
import Grid from './Grid';
import Players from './Players'


//this is where i left off, i will need to work on the responsiveness of this component
function Game() {

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.backgroundColor = '#FCFCFC';
    },[])

    return(
        <main className={styles.container}>
            <NavBar/>
            <Grid/>
            <Players/>
        </main>
    )
}

export default Game;
