import React, {forwardRef} from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import {motion} from 'framer-motion';

const YouWonDialog = forwardRef((props, ref) => {
    const results = useSelector(state => state.results)

    return(
        <dialog open={true} className={styles.dialog} ref={ref}>
            <h1 className={styles.title}>
                You did it!
            </h1>
            <p className={styles.desc}>
                Game over! Here’s how you got on…
            </p>
            <div className={styles.results}>
                <h2 className={styles.results_title}>
                    Time Elapsed
                </h2>
                <p className={styles.results_data}>
                    {results.timeElapsed}
                </p>
            </div>
            <div className={styles.results}>
                <h2 className={styles.results_title}>
                    Moves Taken
                </h2>
                <p className={styles.results_data}>
                    {results.moves} Moves
                </p>
            </div>
            <div className={styles.buttons}>
                <motion.button 
                    className={styles.restart}
                    whileHover={{scale: 1.1, transition: {type: 'spring', stiffness: 250, damping: 4}}}>
                    Restart
                </motion.button>
                <motion.button 
                    className={styles.newGame}
                    whileHover={{scale: 1.1, transition: {type: 'spring', stiffness: 250, damping: 4}}}>
                    Setup New Game
                </motion.button>
            </div>
        </dialog>
    )
})

export default YouWonDialog;