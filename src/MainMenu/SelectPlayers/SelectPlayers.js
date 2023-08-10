import React from 'react';
import {motion} from 'framer-motion';
import styles from './styles.module.css';
import {useDispatch, useSelector} from 'react-redux';

function SelectPlayers({variants}) {
    const dispatch = useDispatch();
    const players = useSelector(state => state.players);

    const handleClick = (option) => {
        dispatch({type: 'change players', players: option})
    }

    return(                
        <motion.div className={styles.players} variants={variants}>
            <motion.h2 className={styles.menu_title} variants={variants}>
                Number of Players
            </motion.h2>
            <motion.button 
                onClick={handleClick}
                className={styles.button} 
                variants={variants}
                transition={{scale: {type: 'spring', damping: 6, stiffness: 400}}}
                style={players === '1' ? {backgroundColor: '#304859'} : {}}
                whileHover={{scale: 1.2, backgroundColor: '#6395B8'}}>
                1
            </motion.button>
            <motion.button 
                onClick={handleClick}
                className={styles.button} 
                variants={variants}
                transition={{scale: {type: 'spring', damping: 6, stiffness: 400}}}
                style={players === '2' ? {backgroundColor: '#304859'} : {}}
                whileHover={{scale: 1.2, backgroundColor: '#6395B8'}}>
                2
            </motion.button>
            <motion.button 
                onClick={handleClick}
                className={styles.button} 
                variants={variants}
                transition={{scale: {type: 'spring', damping: 6, stiffness: 400}}}
                style={players === '3' ? {backgroundColor: '#304859'} : {}}
                whileHover={{scale: 1.2, backgroundColor: '#6395B8'}}>
                3
            </motion.button>
            <motion.button 
                onClick={handleClick}
                className={styles.button} 
                variants={variants}
                transition={{scale: {type: 'spring', damping: 6, stiffness: 400}}}
                style={players === '4' ? {backgroundColor: '#304859'} : {}}
                whileHover={{scale: 1.2, backgroundColor: '#6395B8'}}>
                4
            </motion.button>
        </motion.div>
    )
}

export default SelectPlayers;