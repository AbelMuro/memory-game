import React, {useMemo, useEffect, useRef} from 'react';
import Tile from './Tile';
import RandomizeTiles from './RandomizeTiles';
import ShuffleTiles from './ShuffleTiles';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';

function Grid () {
    const containerRef = useRef();
    const grid = useSelector(state => state.grid);

    const tiles = useMemo(() => {
        const rows = Number(grid[0]);
        const columns = rows;
        const tiles = [];
        let randomTiles = RandomizeTiles(grid); // [1, 1, 5, 5, 4, 4]  we get an array with random numbers, but each number is duplicated
        randomTiles = ShuffleTiles(randomTiles); // [1, 5, 4, 1, 4, 5]

        for(let i = 0; i < rows * columns; i++){   
            tiles.push(
                <Tile tile={randomTiles[i]} key={i}/>
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