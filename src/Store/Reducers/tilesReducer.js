export default function tilesReducer(tiles = [], action) {
    switch(action.type){
        case 'add tile':
            return [...tiles, {tile: action.tile, tileID: action.tileID }];
        case 'remove all tiles':
                return [];
        default: 
            return tiles;
    }
}