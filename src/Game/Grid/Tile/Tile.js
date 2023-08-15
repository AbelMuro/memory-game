import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import {useDispatch, useSelector} from 'react-redux';
import variants from './Variants/Variants.js';
import TileIcon from './TileIcon';

function Tile({tile}) {
    const tiles = useSelector(state => state.tiles);
    const grid = useSelector(state => state.grid);
    const reset = useSelector(state => state.reset);
    const [selected, setSelected] = useState(false);        //local state will check if the current tile has been selected
    const [matches, setMatches] = useState(false);          //local state will check if the current selected tile matches another selected tile
    const tileRef = useRef();
    const iconRef = useRef();
    const timeoutRef = useRef();
    const dispatch = useDispatch();

    //this will dispatch the current tile to the store
    //and we will change the tile to orange
    const handleClick = () => {
        setSelected(true);
        iconRef.current.classList.add('visible');
        tileRef.current.style.pointerEvents = 'none';
        tileRef.current.classList.add(styles.currentPlayerClicked)

        if(tiles.length + 1 > 2){                         
            dispatch({type: 'remove all tiles'});              
            dispatch({type: 'add tile', tile})  
        }
        else
            dispatch({type: 'add tile', tile})
    }

    //this will compare the two tiles in the store 
    //if they are the same, then we change both tiles from orange to grey,
    //if they are not, then they we change both tiles from orange to blue
    useEffect(() => {
        if(tiles.length < 2) return; 
        const firstTile = tiles[0].tile;
        const secondTile = tiles[1].tile;

        if(firstTile === secondTile && selected){
            tileRef.current.style.pointerEvents = 'none';
            timeoutRef.current = setTimeout(() => {
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
                iconRef.current.classList.remove('visible')
                tileRef.current.classList.remove(styles.currentPlayerClicked);
                tileRef.current.classList.remove(styles.clicked);
                tileRef.current.style.pointerEvents = '';                          
                setSelected(false);              
            }, 2000)
        }
    }, [tiles])

    // we reset the tile back to blue if the user clicks on the restart button
    useEffect(() => {
        if(!reset) return;
        tileRef.current.classList.remove(styles.currentPlayerClicked);
        tileRef.current.classList.remove(styles.clicked);
        iconRef.current.classList.remove('visible');
        tileRef.current.style.pointerEvents = '';
        clearTimeout(timeoutRef.current);
        dispatch({type: 'reset all tiles', reset: false});
    }, [reset])

    //when the component first gets mounted, we will display the values of the tiles for a brief moment
    useEffect(() => {
        tileRef.current.style.pointerEvents = 'none';
        tileRef.current.classList.add(styles.clicked);
        iconRef.current.classList.add('visible');

        setTimeout(() => {
            if(!tileRef.current || !iconRef.current) return;
            tileRef.current.style.pointerEvents = ''
            tileRef.current.classList.remove(styles.clicked);
            iconRef.current.classList.remove('visible');
        }, grid === '4x4' ? 6000 : 11000)
    }, [grid])
    

    return(
        <motion.div 
            className={styles.tile} 
            onClick={handleClick}
            variants={variants}
            ref={tileRef}>
                <TileIcon tile={tile} ref={iconRef}/>
        </motion.div>
    )
}

export default Tile;