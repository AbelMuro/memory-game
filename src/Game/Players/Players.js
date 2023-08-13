import React from 'react';
import SinglePlayer from './SinglePlayer';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import {motion} from 'framer-motion';

function Players () {
    const players = useSelector(state => state.players);

    const variantChildren = {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        show: {
            scale: 1,
            opacity: 1
        }
    }

    return(
        <motion.div 
            className={styles.container}
            initial={'hidden'}
            animate={'show'}
            transition={{staggerChildren: 0.3}}>
                {players.map((player, i) => {
                    const score = player.playerScore;
                    const currentTurn = player.turn;
                    return players.length === 1 ? <SinglePlayer key={i}/> : 
                        <motion.div 
                            className={currentTurn ? 
                                [styles.player, styles.currentPlayer].join(' ') : 
                                styles.player} 
                            key={i}
                            variants={variantChildren}>
                            {currentTurn && 
                                <motion.div 
                                    className={styles.arrow} 
                                    initial={{y : 50, opacity: 0}} 
                                    animate={{y: 0, opacity: 1}}
                                    transition={{opacity: {type: 'tween', duration: 0.85}}}/>}
                            {`Player ${i + 1}`}
                            <span className={currentTurn ? [styles.score , styles.currentScore].join(' ') : styles.score}>
                                {score}                            
                            </span>
                            {currentTurn ? 
                                <motion.p className={styles.currentTurn} layoutId='currentTurn'>
                                    current turn
                                </motion.p> : <></>
                            }
                        </motion.div>
            })}
        </motion.div>
    )
}

export default Players;