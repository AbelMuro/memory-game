import React, {useEffect} from 'react';
import styles from './styles.module.css';
import NavBar from './NavBar';

function Game() {

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.backgroundColor = '#FCFCFC';
    },[])

    return(
        <main className={styles.container}>
            <NavBar/>
        </main>
    )
}

export default Game;
