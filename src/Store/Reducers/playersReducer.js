export default function playersReducer(players = [{playerScore: 0}], action) {
    switch(action.type){
        case 'add players':
            return [...action.players];
        default: 
            return players;
    }
}