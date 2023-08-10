import React from 'react';
import {motion, useCycle} from 'framer-motion';
import styles from './styles.module.css';


function OptionButton({option, handleClick ,variants}) {
    const [animate, cycle] = useCycle({scale: 1, backgroundColor: '#BCCED9'}, {scale: 1.2, backgroundColor: '#6395B8'});

    const changeOption = () => {
        handleClick(option)
    }

    return(
        <motion.button 
            onClick={changeOption}
            className={styles.button} 
            variants={variants}
            animate={animate}
            transition={{scale: {type: 'spring', damping: 6, stiffness: 400}}}
            onHoverStart={() => cycle()}
            onHoverEnd={() => cycle()}>
                {option}
        </motion.button>
    )
}

export default OptionButton;