import React, {useMemo, useEffect, useRef} from 'react';
import Tile from './Tile';
import RandomizeTiles from './RandomizeTiles';
import ShuffleTiles from './ShuffleTiles';
import styles from './styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {motion} from 'framer-motion';

function Grid () {
    const containerRef = useRef();
    const grid = useSelector(state => state.grid);
    const tiles = useSelector(state => state.tiles);
    const dispatch = useDispatch();

    const AllTiles = useMemo(() => {
        const rows = Number(grid[0]);
        const columns = rows;
        const tiles = [];
        let randomTiles = RandomizeTiles(grid); // [1, 1, 5, 5, 4, 4]  we get an array with random numbers, but each number is duplicated
        randomTiles = ShuffleTiles(randomTiles); // [1, 5, 4, 1, 4, 5] we shuffle all the numbers

        for(let i = 0; i < rows * columns; i++){   
            tiles.push(
                <Tile tile={randomTiles[i]} key={i}/>
            )
        }
        return tiles;
    }, [grid])

    useEffect(() => {
        containerRef.current.classList.add(
            grid === '4x4' ? 
                styles.fourByFour : 
                styles.sixBySix
            );
    }, [grid])


    useEffect(() => {
        if(tiles.length !== 2) return;

        setTimeout(() => {
            if(tiles[0].tile === tiles[1].tile)
                dispatch({type: 'increase score'});    
            dispatch({type: "next player"});
        }, 2000)

    }, [tiles])

    return(
        <motion.div 
            className={styles.container} 
            ref={containerRef} 
            initial='hide' 
            animate='show' 
            transition={{staggerChildren: 0.3}}>
                {AllTiles}
        </motion.div>
    )
}

export default Grid;