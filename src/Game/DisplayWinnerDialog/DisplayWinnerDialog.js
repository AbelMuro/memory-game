import React, {useMemo, useEffect, useState, useRef} from 'react';
import styles from './styles.module.css';
import { useSelector, useDispatch  } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';
import YouWonDialog from './YouWonDialog';


function DisplayWinnerDialog() {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const players = useSelector(state => state.players);
    const grid = useSelector(state => state.grid);
    const navigate = useNavigate();
    const winningPlayers = useRef([]);
    const overlayRef = useRef();
    const dialogRef = useRef();


    const handleNewGame = () => {
        navigate('/');
    }

    const handleRestart = () => {
        dispatch({type: 'remove all tiles'});     
        dispatch({type: 'reset scores'});
        dispatch({type: 'reset all tiles', reset: true});
        dispatch({type: 'reset turn'});
        setOpen(false);
    }

    const sortedPlayers = useMemo(() => {
        return players.toSorted((a, b) => {
            return a.playerScore < b.playerScore ? 1 : -1;
        })
    })

    useEffect(() => {
        const highestScorePossible = grid === '4x4' ? 8 : 18;
        let highestScoreAchieved = 0;
        const allScores = players.reduce((acc, {playerScore}) => {
            if(highestScoreAchieved <= playerScore){
                highestScoreAchieved = playerScore
            }
            return acc + playerScore;
        }, 0)

        winningPlayers.current = players.filter(({playerNumber, playerScore}) => {
            return playerScore === highestScoreAchieved ? true : false;
        })

        winningPlayers.current = winningPlayers.current.map(({playerNumber}) => {
            return playerNumber;
        })  

        if(allScores === highestScorePossible)
            setOpen(true);
        
    }, [players])

    useEffect(() => {
        if(open){
            overlayRef.current.style.display = 'flex';
            setTimeout(() => {
                if(!overlayRef.current || !dialogRef.current) return;
                overlayRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                dialogRef.current.style.transform = 'scale(1) translate(-50%, -50%)';
            }, 10)
        }
        else{
            overlayRef.current.style.backgroundColor = '';
            dialogRef.current.style.transform = '';
            setTimeout(() => {
                if(!overlayRef.current) return;
                overlayRef.current.style.display = '';                
            }, 200)
        }
    }, [open])

    return(
        <div className={styles.overlay} ref={overlayRef}>
            {
                players.length === 1 ? 
                <YouWonDialog 
                    handleNewGame={handleNewGame} 
                    handleRestart={handleRestart}
                    ref={dialogRef}/>
                :             
                <dialog className={styles.dialog} ref={dialogRef}>
                    <h1 className={styles.title}>
                    {winningPlayers.current.length === 1 ?  
                        `Player ${winningPlayers.current[0]} Wins!` : 
                        "It's a tie!"}
                    </h1>
                    <p className={styles.desc}>
                        Game over! Here are the results
                    </p>
                    {sortedPlayers.map((player, i) => {
                        const playerNumber = player.playerNumber;
                        const score = player.playerScore;
                        const currentPlayerWon = winningPlayers.current.includes(playerNumber);
                        return (
                            <div className={currentPlayerWon ? styles.won : styles.lost} key={i}>
                                <h2 className={styles.player_title}>
                                    Player {playerNumber} {currentPlayerWon && '(Winner!)'}
                                </h2>
                                <p className={styles.score}>
                                    {score} pairs
                                </p>
                            </div>
                        )
                    })}
                    <div className={styles.buttons}>
                        <motion.button 
                            className={styles.restart} 
                            onClick={handleRestart}
                            whileHover={{scale: 1.1, transition: {type: 'spring', stiffness: 250, damping: 4}}}>
                            Restart
                        </motion.button>
                        <motion.button 
                            className={styles.newGame} 
                            onClick={handleNewGame}
                            whileHover={{scale: 1.1, transition: {type: 'spring', stiffness: 250, damping: 4}}}>
                            Setup New Game
                        </motion.button>
                    </div>
                </dialog>
            }



        </div>
    )
}

export default DisplayWinnerDialog;