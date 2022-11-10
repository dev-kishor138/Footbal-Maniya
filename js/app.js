playersArray = [];
function displayPlayerName(playersArray){
    let value = 0;
    const playerContainer = document.getElementById('tbody');

    playerContainer.textContent = '';

    for (let i = 0; i < playersArray.length; i++) {
        value = value + playersArray[i];
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${i + 1}</td>
        <td>${playersArray[i].playerName}</td>
        `;
    
        playerContainer.appendChild(tr);
      }
}

function addPlayerName(player){
    const playerName = player.parentNode.children[0].innerText;
    const ObjecPlayer = {
        playerName: playerName
      };
      playersArray.push(ObjecPlayer);
      displayPlayerName(playersArray);

}

function getInputValue(id){
    const inputField = document.getElementById(id);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}
document.getElementById('calculate-button').addEventListener('click', function(){
    const perPlayer = getInputValue('per-player');
    if(perPlayer > 0){
        const expansePlayer = document.getElementById('player-expanse');
        const calculatePlayer = perPlayer * playersArray.length;
        expansePlayer.innerText = calculatePlayer;
    }
    else{
        alert('Please input per Player Value')
    }

    
})

document.getElementById('calculate-total-button').addEventListener('click', function(){
    const expansePlayer = parseFloat(document.getElementById('player-expanse').innerText);
    const manager = getInputValue('manager');
    const coach = getInputValue('coach');
    if(manager > 0 && coach > 0){
        const totalCalculation = expansePlayer + manager + coach;
        const total = document.getElementById('total');
        total.textContent = totalCalculation;
    }
    else{
        alert('Please input Some Player Value')
    }
})