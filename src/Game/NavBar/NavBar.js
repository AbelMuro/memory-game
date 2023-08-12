import React from 'react';
import styles from './styles.module.css';
import {motion, AnimatePresence} from 'framer-motion'
import MobileMenu from './MobileMenu';
import useMediaQuery from '../../Hooks/useMediaQuery.js';

function NavBar() {
    const [mobile] = useMediaQuery('(max-width: 650px)');

    return(
        <nav className={styles.container}> 
            <h1 className={styles.logo}>
                memory
            </h1>
            <AnimatePresence>
                {mobile ? <MobileMenu/> : 
                <>
                    <motion.button 
                        className={styles.restart}
                        whileHover={{backgroundColor: '#FFB84A', scale: 1.1}}
                        initial={{scale: 0}}
                        animate={{scale: 1, transition: {scale: {duration: 0.4}}}}
                        key={'button one'}
                        exit={{scale: 1.67}}
                        transition={{scale: {type: 'spring', stiffness: 100, damping: 4}}}>
                            Restart
                    </motion.button>
                    <motion.button 
                        className={styles.game}
                        whileHover={{backgroundColor: '#6395B8', color: '#FFFFFF', scale: 1.1}}
                        initial={{scale: 0}}
                        animate={{scale: 1, transition: {scale: {duration: 0.4}}}}
                        key={'button two'}
                        exit={{scale: 0}}
                        transition={{scale: {type: 'spring', stiffness: 100, damping: 4}}}>
                            New Game
                    </motion.button>                
                </>}
            </AnimatePresence>
        </nav>
    )
}

export default NavBar;