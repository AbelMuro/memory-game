import React, {useEffect} from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import SelectTheme from './SelectTheme';
import SelectPlayers from './SelectPlayers';
import SelectGrid from './SelectGrid';

function MainMenu() {

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
        }
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