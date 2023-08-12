import React from 'react';
import {motion} from 'framer-motion'
import styles from './styles.module.css';
import ThemeButton from './ThemeButton';

function SelectTheme ({variants}) {
    return(                
        <motion.div className={styles.theme} variants={variants}>
            <motion.h2 className={styles.menu_title} variants={variants}>
                Select Theme
            </motion.h2>
            <ThemeButton themeOption='Numbers' variants={variants}/>
            <ThemeButton themeOption='Icons' variants={variants}/>
        </motion.div>
    )
}

export default SelectTheme