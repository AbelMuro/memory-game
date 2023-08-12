import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import {motion, useAnimate} from 'framer-motion';
import {useDispatch, useSelector} from 'react-redux';
import icons from './icons';

function Tile({tile}) {
    const tiles = useSelector(state => state.tiles);
    const theme = useSelector(state => state.theme);    
    const [selected, setSelected] = useState(false);
    const [iconRef, animateIcon] = useAnimate();    
    const tileRef = useRef();
    const tileID = useRef(Math.random());
    const dispatch = useDispatch();

    const handleClick = () => {
        setSelected(true);
        animateIcon(iconRef.current, {scale: 1});

        if(tiles.length + 1 > 2){       //we check the length of the array before we add an item, which is why im adding 1 to the length
            dispatch({type: 'remove all tiles'});              
            dispatch({type: 'add tile', tile, tileID: tileID.current})  
        }
        else
            dispatch({type: 'add tile', tile, tileID: tileID.current})
    }

    useEffect(() => {
        tiles.map((currentTile) => {
            const tileInStore = currentTile.tileID;
            if(tileInStore === tileID.current)
                tileRef.current.classList.add(styles.currentPlayerClicked)
            else if(selected)
                tileRef.current.classList.add(styles.clicked);
            else 
                tileRef.current.classList.remove(styles.clicked);
        })
    }, [tiles])

    useEffect(() => {
        if(tiles.length < 2) return;

        const firstTile = tiles[0].tile;
        const secondTile = tiles[1].tile;
        const firstTileId = tiles[0].tileID;
        const secondTileId = tiles[1].tileID;

        if(firstTile === secondTile){

            //this is where i left off, i will need to prevent any further animations from happening at this point
            tileRef.current.classList.remove(styles.currentPlayerClicked);
        }
        else {
            tileRef.current.style.pointerEvents = 'none';
            setTimeout(() => {
                if(!tileRef.current || !iconRef.current) return;
                animateIcon(iconRef.current, {scale: 0});
                tileRef.current.classList.remove(styles.currentPlayerClicked);
                tileRef.current.classList.remove(styles.clicked);
                tileRef.current.classList.add(styles.notClickedYet);      
                setSelected(false);   
                tileRef.current.style.pointerEvents = '';       
            }, 2000)
        }
    }, [tiles])

    return(
        <motion.div 
            className={styles.tile} 
            onClick={handleClick}
            initial={{scale: 0}}
            animate={{scale: 1, transition: {scale: {duration: 0.4}}}}  
            ref={tileRef}
            whileHover={{
                scale: 1.1, 
                transition: {scale: 
                    {type: 'spring', 
                    stiffness: 100, 
                    damping: 4}}}}>

                        {theme === 'Icons' ? 
                        <motion.img 
                            className={styles.tile_image}
                            initial={{scale: 0}}
                            src={icons[tile]}
                            ref={iconRef}/> : 
                            <motion.span
                                className={styles.tile_number} 
                                initial={{scale: 0}}
                                ref={iconRef}>
                                {tile}
                            </motion.span>}
        </motion.div>
    )
}

export default Tile;