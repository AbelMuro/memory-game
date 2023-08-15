import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import {useDispatch, useSelector} from 'react-redux';

function PlayerButton({numberOfPlayers, variants}) {
    const dispatch = useDispatch();
    const players = useSelector(state => state.players);
    const buttonRef = useRef();

    const handleClick = (e) => {
        let number_of_players = e.target.getAttribute('data-option');
        number_of_players = Number(number_of_players);
        const players = []
        for(let i = 0; i < number_of_players; i++){
            if(i === 0)
                players.push({playerScore: 0, turn: true});
            else
                players.push({playerScore: 0, turn: false})
        }
        dispatch({type: 'initialize players', players: players})
    }

    useEffect(() => {
        const selectPlayer = async () => {
            if(Number(players.length) === numberOfPlayers)
                buttonRef.current.classList.add(styles.clicked);
            else
                buttonRef.current.classList.remove(styles.clicked)
        }

        selectPlayer();
    }, [players])

    return(
        <motion.button 
            onClick={handleClick}
            data-option={numberOfPlayers}
            className={styles.button} 
            variants={variants}
            ref={buttonRef}            
            whileHover={{
                scale: 1.1, 
                transition: 
                    {scale: 
                        {type: 'spring', 
                        damping: 4, 
                        tiffness: 100}}}}>
                {numberOfPlayers}
        </motion.button>
    )
}

export default PlayerButton;