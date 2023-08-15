import React, {forwardRef} from 'react';
import './styles.css';
import {useSelector} from 'react-redux';
import icons from './icons';
import useMediaQuery from '../../../../Hooks/useMediaQuery';


//this is where i left off, i will need to change the size of the icon based on the viewport, and the grid
const TileIcon = forwardRef(({tile}, ref) => {
    const theme = useSelector(state => state.theme);
    const mobile = useMediaQuery('(max-width: 650px)');

    return theme === 'Icons' ? 
        <img 
            className={'tile_image'}
            src={icons[tile]}
            ref={ref}/> : 
            <span
                className={'tile_number'} 
                ref={ref}>
                    {tile}
            </span>
    
})

export default TileIcon;