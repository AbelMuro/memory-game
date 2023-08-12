import React from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import GridButton from './GridButton';

function SelectGrid({variants}) {

    return(
        <motion.div className={styles.size}>
            <motion.h2 className={styles.menu_title} variants={variants}>
                Grid Size
            </motion.h2>
            <GridButton gridOption={'4x4'} variants={variants}/>
            <GridButton gridOption={'6x6'} variants={variants}/>
        </motion.div>
    )
}

export default SelectGrid;