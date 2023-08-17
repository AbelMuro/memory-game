import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import {useDispatch, useSelector} from 'react-redux';

function GridButton({gridOption, variants}) {
    const buttonRef = useRef();
    const dispatch = useDispatch();
    const grid = useSelector(state => state.grid);

    const handleClick = (e) => {
        const option = e.target.getAttribute('data-option');
        dispatch({type: 'change grid', grid: option});
    }

    useEffect(() => {
        if(grid === gridOption)
            buttonRef.current.classList.add(styles.clicked);
        else
            buttonRef.current.classList.remove(styles.clicked);
    }, [grid])

    return(
        <motion.button 
            onClick={handleClick}
            data-option={gridOption}
            className={styles.button} 
            variants={variants}
            ref={buttonRef}
            whileHover={{
                scale: 1.1, 
                transition: {
                    scale: 
                        {type: 'spring', 
                        damping: 4, 
                        stiffness: 250}}}}>
                {gridOption}
        </motion.button>
    )
}

export default GridButton;