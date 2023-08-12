import React, {useState, useEffect} from 'react';
import styles from './styles.module.css';
import {motion, useAnimate} from 'framer-motion';
import {useDispatch, useSelector} from 'react-redux';
import icons from './icons';


function Tile({tile, id}) {
    const [selected, setSelected] = useState(false);
    const tiles = useSelector(state => state.tiles);
    const [iconRef, animateIcon] = useAnimate();
    const [tileRef, animateTile] = useAnimate();
    const dispatch = useDispatch();

    const handleClick = async () => {
        setSelected(true);
        await animateIcon(iconRef.current, {scale: 1});
        tileRef.current.style.pointerEvents = 'none';

        if(tiles.length + 1 > 2){       //we check the length of the array before we add an item, which is why im adding 1 to the length
            dispatch({type: 'remove all tiles'});              
            dispatch({type: 'add tile', tile: id})  
        }
        else
            dispatch({type: 'add tile', tile: id})
    }

    useEffect(() => {
        const styleSelectedTile = async () => {
            if(tiles.includes(id)){
                await animateTile(tileRef.current, 
                    {backgroundColor: '#FDA214'}); 
            }
            else{
                await animateTile(tileRef.current,
                    {backgroundColor: selected ? '#BCCED9' : '#304859'});
            }       
        }
        styleSelectedTile();
    }, [tiles])

    return(
        <motion.div 
            className={styles.tile} 
            onClick={handleClick}
            initial={{scale: 0}}
            animate={{scale: 1, transition: {scale: {duration: 0.4}}}}
            ref={tileRef}    
            whileHover={{
                scale: 1.2, 
                transition: {scale: 
                    {type: 'spring', 
                    stiffness: 400, 
                    damping: 4}}}}>
                        <motion.img 
                            className={styles.tile_image}
                            src={icons[tile]}
                            ref={iconRef}/>
        </motion.div>
    )
}

export default Tile;