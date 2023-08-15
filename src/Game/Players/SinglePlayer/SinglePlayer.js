import React, {useEffect, useState, useRef} from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import {motion} from 'framer-motion';

function SinglePlayer() {
    const tiles = useSelector(state => state.tiles);
    const grid = useSelector(state => state.grid);
    const reset = useSelector(state => state.reset);
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
        setTimeout(() => {
            setInterval(() => {
                setSeconds(prevSec => {
                    setMinutes(prevMin => {
                        return prevSec + 1 === 60 ? prevMin + 1 : prevMin;
                    })                
                    return prevSec < 59 ? prevSec + 1 : 0;           
                })
            }, 1000)            
        }, grid === '4x4' ? 6000 : 11000)
    }, [])

    useEffect(() => {
        if(skipFirstRender.current){
            skipFirstRender.current = false;
            return;
        } 
        if(tiles.length == 2)
        setMoves(prevMoves => prevMoves + 1);
    }, [tiles])

    useEffect(() => {
        if(!reset) return;
        setMinutes(0);
        setSeconds(0)
    }, [reset])

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