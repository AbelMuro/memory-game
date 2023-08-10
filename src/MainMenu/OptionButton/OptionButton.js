import React, {useEffect, useRef} from 'react';
import {motion, useCycle} from 'framer-motion';
import styles from './styles.module.css';


function OptionButton({option, currentOption, handleClick ,variants}) {
    const [animate, cycle] = useCycle({scale: 1, backgroundColor: '#BCCED9'}, {scale: 1.2, backgroundColor: '#6395B8'});
    const buttonRef = useRef();

    const changeOption = () => {
        handleClick(option)
    }
    return(
        <motion.button 
            onClick={changeOption}
            className={styles.button} 
            variants={variants}
            transition={{scale: {type: 'spring', damping: 6, stiffness: 400}}}
            style={currentOption === option ? {backgroundColor: '#304859'} : {}}
            whileHover={{scale: 1.2, backgroundColor: '#6395B8'}}>
                {option}
        </motion.button>
    )
}

export default OptionButton;