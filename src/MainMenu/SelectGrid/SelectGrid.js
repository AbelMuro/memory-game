import React from 'react';
import styles from './styles.module.css';
import {useDispatch} from 'react-redux';
import {motion} from 'framer-motion';
import OptionButton from '../OptionButton';

function SelectGrid({variants}) {
    const dispatch = useDispatch();

    const handleClick = (option) => {
        dispatch({type: 'change grid', grid: option});
    }

    return(
        <motion.div className={styles.size}>
            <motion.h2 className={styles.menu_title} variants={variants}>
                Grid Size
            </motion.h2>
            <OptionButton option='4x4' handleClick={handleClick} variants={variants}/>
            <OptionButton option='6x6' handleClick={handleClick} variants={variants}/>
        </motion.div>
    )
}

export default SelectGrid;