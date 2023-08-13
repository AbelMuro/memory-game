import React, {useEffect, useState, useRef} from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import {motion} from 'framer-motion';

function SinglePlayer() {
    const tiles = useSelector(state => state.tiles);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [moves, setMoves] = useState(0);
    const skipFirstRender = useRef(true);

    const variants = {
        hide: {
            scale: 0,
            opacity: 0,
        },
        show: {
            scale: 1,
            opacity: 1,
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSec => {
                setMinutes(prevMin => {
                    return prevSec + 1 === 60 ? prevMin + 1 : prevMin;
                })                
                return prevSec < 59 ? prevSec + 1 : 0;           
            })
        }, 1000)

        return () => clearInterval(interval);    
    }, [])

    useEffect(() => {
        if(skipFirstRender.current){
            skipFirstRender.current = false;
            return;
        } 
        setMoves(prevMoves => prevMoves + 1);
    }, [tiles])

    return (
        <motion.div 
            className={styles.container} 
            initial='hide' 
            animate='show'
            transition={{staggerChildren: 0.3}}>
            <motion.div className={styles.box} variants={variants}>
                <p className={styles.title}>
                    Time
                </p>
                <p className={styles.data}>
                    {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
                </p>
            </motion.div>
            <motion.div className={styles.box} variants={variants}>
                <p className={styles.title}>
                    Moves
                </p>
                <p className={styles.data}>
                    {moves}
                </p>
            </motion.div>
        </motion.div>
    )
}

export default SinglePlayer;