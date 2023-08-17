import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';
import { useSelector } from 'react-redux';

function MobileMenu({restart}) {
    const [open, setOpen] = useState(false);
    const grid = useSelector(state => state.grid)
    const navigate = useNavigate();
    const overlayRef = useRef();
    const dialogRef = useRef();
    const menuButtonRef = useRef()


    const handleOpen = () => {
        setOpen(!open);
    }

    const handleRestart = () => {
        restart();
        setOpen(false);
    }

    const handleNewGame = () => {
        navigate('/');
        setOpen(false)
    }

    const handleResume = () => {
        setOpen(false);
    }

    useEffect(() => {
        if(open){
            overlayRef.current.style.display = 'block';
            setTimeout(() => {
                if(!overlayRef.current || !dialogRef.current) return;
                overlayRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                dialogRef.current.style.transform = 'scale(1)';
            }, 10)
        }
        else {
            overlayRef.current.style.backgroundColor = '';
            dialogRef.current.style.transform = '';

            setTimeout(() => {
                if(!dialogRef.current) return;
                overlayRef.current.style.display = '';
            }, 200)
        }
    }, [open])


    useEffect(() => {
        menuButtonRef.current.disabled = true;
        setTimeout(() => {
            if(!menuButtonRef.current) return;
            menuButtonRef.current.disabled = false;
        }, grid === '4x4' ? 6000 : 11000)
    }, [])

    return(
        <>
            <motion.button 
                onClick={handleOpen}
                className={styles.menuButton}
                initial={{y: -100, opacity: 0}}
                animate={{y: 0, opacity: 1, transition: {y: {type: 'tween', duration: 0.4}}}}
                key={'mobile button'}
                exit={{scale: 0}}
                ref={menuButtonRef}
                whileHover={{backgroundColor: '#FFB84A', scale: 1.1, transition: {scale: {
                    type:'spring',
                    stiffness: 250,
                    damping: 4
                }}}}>
                Menu
            </motion.button>       
            <div className={styles.overlay} ref={overlayRef}>
                <dialog className={styles.dialog} ref={dialogRef}>
                    <motion.button 
                        onClick={handleRestart}
                        className={styles.restart}
                        whileHover={{backgroundColor: '#FFB84A', scale: 1.1}}>
                        Restart
                    </motion.button>
                    <motion.button 
                        onClick={handleNewGame}
                        className={styles.gameButton}
                        whileHover={{backgroundColor: '#6395B8', color: '#ffffff', scale: 1.1}}>
                        New Game
                    </motion.button>
                    <motion.button 
                        onClick={handleResume}
                        className={styles.gameButton}
                        whileHover={{backgroundColor: '#6395B8', color: '#ffffff', scale: 1.1}}>
                        Resume Game
                    </motion.button>
                </dialog>
            </div> 
        </>

    )
}

export default MobileMenu;