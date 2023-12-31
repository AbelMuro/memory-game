import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion'
import MobileMenu from './MobileMenu';
import useMediaQuery from '../../Hooks/useMediaQuery.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const [mobile] = useMediaQuery('(max-width: 650px)');
    const grid = useSelector(state => state.grid);
    const navigate = useNavigate();
    const buttonRef = useRef();
    const dispatch = useDispatch();

    const variants = {
        hidden: {
            y : -100,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {y: {type: 'tween', duration: 0.4}}
        }
    }

    const handleRestart = () => {
        dispatch({type: 'remove all tiles'});     
        dispatch({type: 'reset scores'});
        dispatch({type: 'reset all tiles', reset: true});
        dispatch({type: 'reset turn'});
    }   

    const handleNewGame = () => {
        navigate('/')
    }

    useEffect(() => {
        buttonRef.current.disabled = true;
        setTimeout(() => {
            if(!buttonRef.current) return;
            buttonRef.current.disabled = false;
        }, grid === '4x4' ? 6000 : 11000)
    }, [])

    return(
        <motion.nav 
            className={styles.container} 
            initial={'hidden'} 
            animate={'show'}
            transition={{staggerChildren: 0.6}}> 
            <motion.h1 className={styles.logo} variants={variants}>
                memory
            </motion.h1>
                {mobile ? <MobileMenu restart={handleRestart}/> : 
                <>
                    <motion.button 
                        className={styles.restart}
                        onClick={handleRestart}
                        whileHover={{backgroundColor: '#FFB84A', scale: 1.1, transition: {scale: {type: 'spring', stiffness: 250, damping: 4}}}}
                        variants={variants}
                        ref={buttonRef}>
                            Restart
                    </motion.button>
                    <motion.button 
                        className={styles.game}
                        onClick={handleNewGame}
                        variants={variants}
                        whileHover={{backgroundColor: '#6395B8', color: '#FFFFFF', scale: 1.1, transition: {scale: {type: 'spring', stiffness: 250, damping: 4}}}}>
                            New Game
                    </motion.button>                
                </>}
        </motion.nav>
    )
}

export default NavBar;