import React from 'react';
import {motion} from 'framer-motion';
import styles from './styles.module.css';
import PlayerButton from './PlayerButton';

function SelectPlayers({variants}) {

    return(                
        <motion.div className={styles.players} variants={variants}>
            <motion.h2 className={styles.menu_title} variants={variants}>
                Number of Players
            </motion.h2>
            <PlayerButton numberOfPlayers={1} variants={variants}/>
            <PlayerButton numberOfPlayers={2} variants={variants}/>
            <PlayerButton numberOfPlayers={3} variants={variants}/>
            <PlayerButton numberOfPlayers={4} variants={variants}/>
        </motion.div>
    )
}

export default SelectPlayers;