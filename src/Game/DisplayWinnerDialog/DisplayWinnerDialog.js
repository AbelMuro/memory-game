import React, {useMemo, useEffect, useState, useRef} from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import {motion} from 'framer-motion';


function DisplayWinnerDialog() {
    const [open, setOpen] = useState(false);
    const players = useSelector(state => state.players);
    const overlayRef = useRef();
    const dialogRef = useRef();

    const sortedPlayers = useMemo(() => {
        return players.toSorted((a, b) => {
            return a.playerScore < b.playerScore ? 1 : -1;
        })
    })

    useEffect(() => {
        //this is where i left off, i will need to accumulate all the scores and see if they match up to the maximum score possible
    }, [])

    useEffect(() => {
        if(open){
            overlayRef.current.style.display = 'block';
            setTimeout(() => {
                if(!overlayRef.current || !dialogRef.current) return;
                overlayRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                dialogRef.current.style.transform = 'scale(1)';
            }, 10)
        }
        else{
            overlayRef.current.style.backgroundColor = '';
            dialogRef.current.style.transform = '';
            setTimeout(() => {
                if(!overlayRef.current) return
                overlayRef.current.style.display = '';                
            }, 200)
        }
    }, [open])

    return(
        <div className={styles.overlay} ref={overlayRef}>
            <dialog open={true} className={styles.dialog} ref={dialogRef}>
                <h1 className={styles.title}>
                    Player 3 Wins!
                </h1>
                <p className={styles.desc}>
                    Game over! Here are the results
                </p>
                {sortedPlayers.map((player, i) => {
                    return (
                        <div className={styles.player} key={i}>
                            <h2 className={styles.player_title}>
                                Player {player.playerNumber}
                            </h2>
                            <p className={styles.score}>
                                {player.playerScore} pairs
                            </p>
                        </div>
                    )
                })}
                <div className={styles.buttons}>
                    <button className={styles.restart}>
                        Restart
                    </button>
                    <button className={styles.newGame}>
                        Setup New Game
                    </button>
                </div>
            </dialog>
        </div>
    )
}

export default DisplayWinnerDialog;