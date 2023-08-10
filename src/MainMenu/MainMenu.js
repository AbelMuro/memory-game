import React, {useEffect} from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import {useDispatch } from 'react-redux';
import SelectTheme from './SelectTheme';
import SelectPlayers from './SelectPlayers';
import SelectGrid from './SelectGrid';


//this is where i left off, i will need to somehow detect the change in state 
//and restyle the buttons if they have the same value as the state
function MainMenu() {
    const dispatch = useDispatch();

    const variants = {
        hidden: {
            x: -100,
            opacity: 0,            
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.5,
                staggerChildren: 0.3
            }
        },
        hover: {
            scale: 1.2,
            backgroundColor: '#6395B8',
            transition: {scale: {type: 'bounce', stiffness: 400, damping: 4 }}
        }
    }

    const handleTheme = (e) => {

        dispatch({type: 'change theme', theme:''})
    }

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.backgroundColor = '#152938';
    }, [])



    return (
        <section className={styles.container}>
            <motion.h1 
                className={styles.title} 
                initial={{x: -100, opacity: 0}} 
                animate={{x: 0, opacity: 1}}
                transition={{
                    type: 'tween',
                    duration: 1.5
                }}
                >
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
                <motion.button className={styles.start} variants={variants}>
                    Start Game
                </motion.button>
            </motion.main>            
        </section>

    )
}

export default MainMenu;