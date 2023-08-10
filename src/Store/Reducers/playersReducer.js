export default function playersReducer(players = 1, action) {
    switch(action.type){
        case 'change players':
            return action.players;
        default: 
            return players;
    }
}