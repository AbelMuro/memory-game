import React, {useMemo, useEffect, useRef} from 'react';
import Tile from './Tile';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import {motion} from 'framer-motion';

function Grid () {
    const containerRef = useRef();
    const grid = useSelector(state => state.grid);
    const players = useSelector(state => state.players);
    const theme = useSelector(state => state.theme);

    const tiles = useMemo(() => {
        const rows = Number(grid[0]);
        const columns = rows;
        const tiles = [];

        for(let i = 0; i < rows * columns; i++){
            const currentIconTile = Math.floor(Math.random() * 18) + 1;        
            tiles.push(
                <Tile index={currentIconTile} key={i}/>
            )
        }
        return tiles;
    }, [grid])

    useEffect(() => {
        const columns = grid[0];
        containerRef.current.style.gridTemplateColumns = `repeat(${columns}, auto)`;
    }, [grid])

    return(
        <div className={styles.container} ref={containerRef}>
            {tiles}
        </div>
    )
}

export default Grid;