import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import {useDispatch, useSelector} from 'react-redux';
import variants from './Variants/Variants.js';
import icons from './icons';

function Tile({tile}) {
    const tiles = useSelector(state => state.tiles);
    const theme = useSelector(state => state.theme);    
    const grid = useSelector(state => state.grid)
    const [selected, setSelected] = useState(false);        //local state will check if the current tile has been selected
    const [matches, setMatches] = useState(false);  
    const tileRef = useRef();
    const iconRef = useRef();
    const dispatch = useDispatch();

    const handleClick = () => {
        setSelected(true);
        iconRef.current.classList.add(styles.visible);
        tileRef.current.style.pointerEvents = 'none';

        if(tiles.length + 1 > 2){                         
            dispatch({type: 'remove all tiles'});              
            dispatch({type: 'add tile', tile})  
        }
        else
            dispatch({type: 'add tile', tile})
    }

    useEffect(() => {
        tiles.map((tileInStore) => {
            const tileInStoreValue = tileInStore.tile;
            if(tileInStoreValue === tile && selected)
                tileRef.current.classList.add(styles.currentPlayerClicked)
        })
    }, [tiles, selected])

    useEffect(() => {
        if(tiles.length < 2) return; 
        const firstTile = tiles[0].tile;
        const secondTile = tiles[1].tile;

        if(firstTile === secondTile && selected){
            tileRef.current.style.pointerEvents = 'none';
            setTimeout(() => {
                if(!tileRef.current) return;
                tileRef.current.classList.add(styles.clicked);
                tileRef.current.classList.remove(styles.currentPlayerClicked);
                setMatches(true);              
            }, 2000)
        }
        else if(!matches) {
            tileRef.current.style.pointerEvents = 'none';
            setTimeout(() => {
                if(!tileRef.current || !iconRef.current) return;
                iconRef.current.classList.remove(styles.visible)
                tileRef.current.classList.remove(styles.currentPlayerClicked);
                tileRef.current.classList.remove(styles.clicked);
                tileRef.current.classList.add(styles.notClickedYet); 
                tileRef.current.style.pointerEvents = '';                          
                setSelected(false);              
            }, 2000)
        }
    }, [tiles])

    useEffect(() => {
        tileRef.current.style.pointerEvents = 'none';
        iconRef.current.style.pointerEvents = 'none';
        tileRef.current.classList.add(styles.clicked);
        iconRef.current.classList.add(styles.visible);

        setTimeout(() => {
            if(!tileRef.current || !iconRef.current) return;
            tileRef.current.style.pointerEvents = ''
            iconRef.current.style.pointerEvents = '';
            tileRef.current.classList.remove(styles.clicked);
            iconRef.current.classList.remove(styles.visible);
        }, grid === '4x4' ? 3300 : 7300)
    }, [grid])

    useEffect(() => {
        tileRef.current.style.width = grid === '4x4' ? '118px' : '82px';
        tileRef.current.style.height = grid === '4x4' ? '118px' : '82px';
        iconRef.current.style.fontSize = grid === '4x4' ? '3.5rem' : '2.75rem';
        iconRef.current.style.width = grid === '4x4' ? '56px' : '56px';
    }, [grid])

    return(
        <motion.div 
            className={styles.tile} 
            onClick={handleClick}
            variants={variants}
            ref={tileRef}>
            {theme === 'Icons' ? 
                <img 
                    className={styles.tile_image}
                    src={icons[tile]}
                    ref={iconRef}/> : 
                    <span
                        className={styles.tile_number} 
                        ref={iconRef}>
                            {tile}
                    </span>}
        </motion.div>
    )
}

export default Tile;