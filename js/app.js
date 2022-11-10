players = [];
function displayPlayerName(players){
    const ul = document.querySelector('ul');
    
    ul.textContent = '';

    for(const player of players){
        const playerList = document.createElement('ol');
        playerList.textContent = player;
        ul.appendChild(playerList);
    }
    
}

function addPlayerName(player){
    const playerName = player.parentNode.children[0].innerText;
    players.push(playerName);
    displayPlayerName(players);

}

function getInputValue(id){
    const inputField = document.getElementById(id);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}
document.getElementById('calculate-button').addEventListener('click', function(){
    const perPlayer = getInputValue('per-player');
    
})