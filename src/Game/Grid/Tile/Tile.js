import React, {useState} from 'react';
import styles from './styles.module.css';
import {motion, useAnimate} from 'framer-motion';
import icons from './icons';

function Tile({index}) {
    const [iconRef, animateIcon] = useAnimate();
    const [tileRef, animateTile] = useAnimate();
    const [removeHover, setRemoveHover] = useState(false);

    const handleClick = async () => {
        await animateIcon(iconRef.current ,{scale: 1});
        await animateTile(tileRef.current, {backgroundColor: '#BCCED9'});
        setRemoveHover(true)
    }

    return(
        <motion.div 
            className={styles.tile} 
            onClick={handleClick}
            initial={{scale: 0}}
            animate={{scale: 1, transition: {scale: {duration: 0.4}}}}
            ref={tileRef}    
            whileHover={removeHover ? {} : {
                scale: 1.2, 
                transition: {scale: 
                    {type: 'spring', 
                    stiffness: 400, 
                    damping: 4}}}}>
                        <motion.img 
                            className={styles.tile_image}
                            src={icons[index]}
                            ref={iconRef}/>
        </motion.div>
    )
}

export default Tile;