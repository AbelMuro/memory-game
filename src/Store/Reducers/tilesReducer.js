export default function tilesReducer(tiles = [], action) {
    switch(action.type){
        case 'add tile':
            return [...tiles, action.tile];
        case 'remove all tiles':
                return [];
        default: 
            return tiles;
    }
}