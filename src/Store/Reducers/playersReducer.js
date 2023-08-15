export default function playersReducer(players = [{playerScore: 0, turn: true}], action) {
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
            return players.map(({playerScore}, index) => {
                if(index === 0)
                    return {playerScore, turn: true};
                else
                    return {playerScore, turn: false};
            })
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