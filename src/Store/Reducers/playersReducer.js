export default function playersReducer(players = [{playerNumber: 1, playerScore: 0, turn: true}], action) {
    let copyPlayers = JSON.parse(JSON.stringify(players));
    let currentPlayer;

    switch(action.type){
        case 'initialize players':
            return [...action.players];
        case 'increase score':
            copyPlayers.forEach(({playerScore, turn}, index) => {
                if(turn)
                    copyPlayers[index].playerScore += 1;
            })
            return copyPlayers;
        case 'reset turn':
            copyPlayers.forEach((player, index) => {
                copyPlayers[index].turn = index === 0 ? true : false
            })
            return copyPlayers;
        case 'reset scores':
            copyPlayers.forEach((player , i) => {
                copyPlayers[i].playerScore = 0;
            })
            return copyPlayers;
        case 'next player': 
            copyPlayers.forEach(({playerScore, turn}, index) => {
                if(turn){
                    currentPlayer = index;
                    copyPlayers[index].turn = false; 
                }
            })
            if(copyPlayers[currentPlayer + 1])
                copyPlayers[currentPlayer + 1].turn = true;
            else
                copyPlayers[0].turn = true;

            return copyPlayers;
        default: 
            return players;
    }
}