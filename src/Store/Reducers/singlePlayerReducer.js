export default function resultsReducer(results = {timeElapsed: '', moves: ''}, action) {
    switch(action.type){
        case 'update results':
            return {timeElapsed: action.time, moves: action.moves}
        default:
            return results;
    }
}
