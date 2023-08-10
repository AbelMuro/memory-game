import React from 'react';
import {motion} from 'framer-motion';
import styles from './styles.module.css';
import OptionButton from '../OptionButton';
import {useDispatch} from 'react-redux';

function SelectPlayers({variants}) {
    const dispatch = useDispatch();

    const handleClick = (option) => {
        dispatch({type: 'change players', players: option})
    }

    return(                
        <motion.div className={styles.players} variants={variants}>
            <motion.h2 className={styles.menu_title} variants={variants}>
                Number of Players
            </motion.h2>
            <OptionButton option='1' handleClick={handleClick} variants={variants}/>
            <OptionButton option='2' handleClick={handleClick} variants={variants}/>
            <OptionButton option='3' handleClick={handleClick} variants={variants}/>
            <OptionButton option='4' handleClick={handleClick} variants={variants}/>
        </motion.div>
    )
}

export default SelectPlayers;