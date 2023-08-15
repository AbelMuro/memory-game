import React, {forwardRef, useEffect} from 'react';
import './styles.css';
import {useSelector} from 'react-redux';
import icons from './icons';
import useMediaQuery from '../../../../Hooks/useMediaQuery';

//this is where i left off, i will need to change the size of the icon based on the viewport, and the grid
const TileIcon = forwardRef(({tile}, ref) => {
    const theme = useSelector(state => state.theme);
    const grid = useSelector(state => state.grid);
    const mobile = useMediaQuery('(max-width: 650px)');

    useEffect(() => {
        if(grid === '4x4'){
            if(theme === 'Numbers')
               ref.current.fontSize = mobile ? '2.5rem' : '';  
            else
                ref.current.width = mobile ? '30px' : ''
        }
        else{
            if(theme === 'Numbers')
                ref.current.fontSize = mobile ? '' : ''
        }   


    }, [grid]);

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