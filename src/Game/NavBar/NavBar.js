import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion'
import MobileMenu from './MobileMenu';
import useMediaQuery from '../../Hooks/useMediaQuery.js';
import { useDispatch, useSelector } from 'react-redux';


function NavBar() {
    const [mobile] = useMediaQuery('(max-width: 650px)');
    const grid = useSelector(state => state.grid);
    const buttonRef = useRef();
    const dispatch = useDispatch();

    const handleRestart = () => {
        dispatch({type: 'remove all tiles'});     
        dispatch({type: 'reset scores'});
        dispatch({type: 'reset all tiles', reset: true});
    }   

    useEffect(() => {
        buttonRef.current.disabled = true;
        setTimeout(() => {
            if(!buttonRef.current) return;
            buttonRef.current.disabled = false;
        }, grid === '4x4' ? 6000 : 11000)
    }, [])

    return(
        <nav className={styles.container}> 
            <h1 className={styles.logo}>
                memory
            </h1>
                {mobile ? <MobileMenu/> : 
                <>
                    <motion.button 
                        className={styles.restart}
                        onClick={handleRestart}
                        whileHover={{backgroundColor: '#FFB84A', scale: 1.1}}
                        initial={{scale: 0}}
                        animate={{scale: 1, transition: {scale: {duration: 0.4}}}}
                        transition={{scale: {type: 'spring', stiffness: 100, damping: 4}}}
                        ref={buttonRef}>
                            Restart
                    </motion.button>
                    <motion.button 
                        className={styles.game}
                        whileHover={{backgroundColor: '#6395B8', color: '#FFFFFF', scale: 1.1}}
                        initial={{scale: 0}}
                        animate={{scale: 1, transition: {scale: {duration: 0.4}}}}
                        transition={{scale: {type: 'spring', stiffness: 100, damping: 4}}}>
                            New Game
                    </motion.button>                
                </>}
        </nav>
    )
}

export default NavBar;