import React from 'react';
import {motion} from 'framer-motion'
import styles from './styles.module.css';
import OptionButton from '../OptionButton';
import { useDispatch } from 'react-redux';

function SelectTheme ({variants}) {
    const dispatch = useDispatch();

    const handleClick = (option) => {
        dispatch({type: 'change theme', theme: option})
    }

    return(                
        <motion.div className={styles.theme} variants={variants}>
            <motion.h2 className={styles.menu_title} variants={variants}>
                Select Theme
            </motion.h2>
            <OptionButton option='Numbers' handleClick={handleClick} variants={variants}/>
            <OptionButton option='Icons' handleClick={handleClick} variants={variants}/>
        </motion.div>
    )
}

export default SelectTheme