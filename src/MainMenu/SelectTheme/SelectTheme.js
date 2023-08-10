import React from 'react';
import {motion} from 'framer-motion'
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';

function SelectTheme ({variants}) {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);

    const handleClick = (e) => {
        const option = e.target.getAttribute('option');
        
        dispatch({type: 'change theme', theme: option})
    }

    return(                
        <motion.div className={styles.theme} variants={variants}>
            <motion.h2 className={styles.menu_title} variants={variants}>
                Select Theme
            </motion.h2>
            <motion.button 
                onClick={handleClick}
                data-option={'Numbers'}
                className={styles.button} 
                variants={variants}
                transition={{scale: {type: 'spring', damping: 6, stiffness: 400}}}
                style={theme === 'Numbers' ? {backgroundColor: '#304859'} : {}}
                whileHover={theme !== 'Numbers' ? {scale: 1.2, backgroundColor: '#6395B8'} : {}}>
                    Numbers
            </motion.button>
            <motion.button 
                onClick={handleClick}
                data-option={'Icons'}
                className={styles.button} 
                variants={variants}
                transition={{scale: {type: 'spring', damping: 6, stiffness: 400}}}
                style={theme === 'Icons' ? {backgroundColor: '#304859'} : {}}
                whileHover={theme !== 'Icons' ? {scale: 1.2, backgroundColor: '#6395B8'} : {}}>
                    Icons
            </motion.button>
        </motion.div>
    )
}

export default SelectTheme