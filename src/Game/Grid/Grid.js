import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';

function Grid () {
    const grid = useSelector(state => state.grid);
    const players = useSelector(state => state.players);
    const theme = useSelector(state => state.theme);

    return(
        <div className={styles.container}>
            {grid === '4x4' ? <></> : <></>}
        </div>
    )
}

export default Grid;