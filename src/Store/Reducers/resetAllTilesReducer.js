export default function resetAllTilesReducer(reset = false, action) {
    switch(action.type){
        case 'reset all tiles':
            return action.reset;
        default:
            return reset;
    }
}