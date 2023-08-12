import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';

function Players () {
    const players = useSelector(state => state.players);

    return(
        <div className={styles.container}>
            {players.map((player, i) => {
                return(
                    <div className={styles.player} key={i}>
                        {`Player ${i + 1}`}
                        <span>
                            {player.playerScore}                            
                        </span>
                    </div>
                    )
            })}
        </div>
    )
}

export default Players;