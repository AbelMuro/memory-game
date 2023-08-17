export default function resultsReducer(results = {timeElapsed: '0:00', moves: '0'}, action) {
    switch(action.type){
        case 'update results':
            return {timeElapsed: action.time, moves: action.moves}
        default:
            return results;
    }
}
