import React, {useEffect} from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import SelectTheme from './SelectTheme';
import SelectPlayers from './SelectPlayers';
import SelectGrid from './SelectGrid';
import {useNavigate} from 'react-router';
import {useDispatch} from 'react-redux';

//the problem is the variant object
function MainMenu() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const variants = {
        hidden: {
            x: -150,
            opacity: 0,            
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                opacity: {duration: 0.7},
                x: {duration: 0.5},
                staggerChildren: 0.3
            }
        }
    }

    const handleStart = async () => {
        navigate('/start');
    }

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.backgroundColor = '#152938';
    }, [])

    //this useEffect is used to reset the state that is persisted in redux
    useEffect(() => {
        dispatch({type: 'reset scores'});
        dispatch({type: 'reset turn'});
        dispatch({type: 'remove all tiles'})    //just in case the player goes back to the main menu
    }, [])                                      //im doing this to avoid bugs

    return (
        <section className={styles.container}>
            <motion.h1 
                className={styles.title} 
                initial={{x: -100, opacity: 0}} 
                animate={{x: 0, opacity: 1}}
                transition={{
                    duration: 1.5
                }}>
                memory
            </motion.h1>
            <motion.main 
                className={styles.menu}
                initial='hidden'
                animate='show'
                variants={variants}>
                    <SelectTheme variants={variants}/>
                    <SelectPlayers variants={variants}/>
                    <SelectGrid variants={variants}/>
                    <motion.button 
                        className={styles.start} 
                        variants={variants}
                        onClick={handleStart}
                        transition={{scale: {type: 'spring', stiffness: 250, damping: 4}}}
                        whileHover={{backgroundColor: '#FFB84A', scale: 1.1}}>
                            Start Game
                    </motion.button>
            </motion.main>            
        </section>

    )
}

export default MainMenu;