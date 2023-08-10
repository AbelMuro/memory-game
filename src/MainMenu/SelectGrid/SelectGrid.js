import React from 'react';
import styles from './styles.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {motion} from 'framer-motion';

function SelectGrid({variants}) {
    const dispatch = useDispatch();
    const grid = useSelector(state => state.grid);

    const handleClick = (e) => {
        const option = e.target.getAttribute('data-option');
        dispatch({type: 'change grid', grid: option});
    }



    return(
        <motion.div className={styles.size}>
            <motion.h2 className={styles.menu_title} variants={variants}>
                Grid Size
            </motion.h2>
            <motion.button 
                onClick={handleClick}
                data-option={'4x4'}
                className={styles.button} 
                variants={variants}
                transition={{scale: {type: 'spring', damping: 6, stiffness: 400}}}
                whileHover={grid !== '4x4' ? {scale: 1.2, backgroundColor: '#6395B8'} : {}}>
                    4x4
            </motion.button>
            <motion.button 
                onClick={handleClick}
                data-option={'6x6'}
                className={styles.button} 
                variants={variants}
                transition={{scale: {type: 'spring', damping: 6, stiffness: 400}}}
                whileHover={grid !== '6x6' ? {scale: 1.2, backgroundColor: '#6395B8'} : {}}
                whileTab={{scale: 1, backgroundColor: '#304859'}}>
                    6x6
            </motion.button>
        </motion.div>
    )
}

export default SelectGrid;