export default function gridReducer(grid = '4x4', action) {
    switch(action.type){
        case 'change grid':
            return action.grid;
        default:
            return grid;
    }
}