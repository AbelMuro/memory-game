import React from 'react';
import SinglePlayer from './SinglePlayer';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import {motion} from 'framer-motion';
import useMediaQuery from '../../Hooks/useMediaQuery.js';

function Players () {
    const players = useSelector(state => state.players);
    const [mobile] = useMediaQuery('(max-width: 650px)');
    const [tablet] = useMediaQuery('(max-width: 850px)');

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
            whileInView={'show'}
            viewport={{once: true, amount: 0.5}}
            transition={{staggerChildren: 0.3}}>
                {players.length === 1 ? <SinglePlayer/>  :
                    players.map((player, i) => {
                        const score = player.playerScore;
                        const currentTurn = player.turn;
                        const playerNumber = player.playerNumber;
                        return(
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

                                   {mobile ? `P${playerNumber}` : `Player ${playerNumber}`}

                                   <span className={currentTurn ? [styles.score , styles.currentScore].join(' ') : styles.score}>
                                        {score}                            
                                    </span>

                                   {currentTurn && !tablet ? 
                                        <motion.p className={styles.currentTurn} layoutId='currentTurn'>
                                            current turn
                                        </motion.p> : <></>
                                    }
                                </motion.div>)
                })}
        </motion.div>
    )
}

export default Players;