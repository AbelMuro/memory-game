import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';

function ThemeButton({themeOption, variants}) {
    const buttonRef = useRef();
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);

    const handleClick = (e) => {
        const option = e.target.getAttribute('data-option');
        dispatch({type: 'change theme', theme: option})
    }

    useEffect(() => {
        if(theme === themeOption)
            buttonRef.current.classList.add(styles.clicked);
         else
            buttonRef.current.classList.remove(styles.clicked);
    }, [theme])

    return(
        <motion.button 
            onClick={handleClick}
            data-option={themeOption}
            className={styles.button} 
            variants={variants}
            ref={buttonRef}            
            whileHover={{
                scale: 1.1, 
                transition: 
                    {scale: 
                        {type: 'spring', 
                        damping: 4, 
                        stiffness: 250}}}}>
                {themeOption}
        </motion.button>
    )
}

export default ThemeButton;