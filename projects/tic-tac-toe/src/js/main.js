let grid = document.querySelectorAll('.grid');
let gridChild = document.querySelectorAll('.grid-child');
function CreatePlayer(getName, id) {
    this.getName = prompt(`Enter a name for player ${id}.`)
    this.id = id;
};
let gameboardObj = {
    gameboard: [
        '', '', '',
        '', '', '',
        '', '', '']
};
const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let playerTurn = document.querySelector('#player-turn');
let player1 = new CreatePlayer(this.getName, 1);
let player2 = new CreatePlayer(this.getName, 2);
if (player1.getName == '' || player2.getName == '' ||
    player1.getName == null || player2.getName == null
) {  // fallback names
    player1.getName = 'Player 1';
    player2.getName = 'Player 2';
}
let currentPlayer;
let placeElem;
let roundNum = 0;
(function gameLoop() {
    gridChild.forEach(e => {
        e.textContent = '';
    })
    currentPlayer = player1;
    placeElem = 'X';
    roundNum = 0;
    if (roundNum != 10) { // max 9 rounds
        setPlayer(currentPlayer, playerTurn);
    }
    else {
        checkWinner();
    }
    function setPlayer() {
        checkWinner();
        if (currentPlayer == player1) {
            placeElem = 'X';
            playerTurn.textContent = `${player1.getName}'s turn.`
            currentPlayer = player2;
            gridChild.forEach(e => {
                e.addEventListener('mouseover', () => {
                    e.classList.remove('p2-turn'); // disable red hover overlay when player2's turn is complete
                })
            })
            currentPlayer = player2;
        }
        else {
            placeElem = 'O';
            playerTurn.textContent = `${player2.getName}'s turn.`
            currentPlayer = player1;
            gridChild.forEach(e => {
                e.addEventListener('mouseover', () => {
                    e.classList.add('p2-turn');
                })
            })
            currentPlayer = player1;
        }
        placeMarker(currentPlayer);
        checkWinner(roundNum++)
    }
    gridChild.forEach(e => {
        e.addEventListener('click', () => {
            if (e.textContent == '') {
                gameboardObj.gameboard[Array.prototype.indexOf.call(gridChild, e)] = placeElem; // gah damn
                e.textContent = placeElem;
                setPlayer(currentPlayer);
                placeMarker(placeElem);
            }
        });
    })
    function placeMarker(gridChild) {
        gridChild.textContent = placeElem;
        
    }
    function checkWinner() {
        for (let i=0; i<winCondition.length; i++) {
            const [a, b, c] = winCondition[i]; // thanks medium.com 
            if (gridChild[a].textContent === placeElem &&
                gridChild[b].textContent === placeElem &&
                gridChild[c].textContent === placeElem) {
                if (currentPlayer == player1) { // hotfix for bug where checkWinner() is always called AFTER playerTurn has been changed
                    currentPlayer = player2;
                }
                else {
                    currentPlayer = player1;
                }
                declareWinner();
                return;
            }
        }
        if (roundNum == 10) {
            currentPlayer = null;
            declareWinner()
            return;
        }
    }
    function declareWinner() {
        winModal = document.querySelector('.win-modal');
        playerWin = document.querySelector('#player-win');
        if (currentPlayer != null) {
            playerWin.textContent = `${currentPlayer.getName} wins.`;
        }
        else { // game is a draw
            playerWin.textContent = `The result is a draw.`;
        };
        winModal.classList.add('is-active');
    }
    const rematchBtn = document.querySelector('.win-modal button');
    rematchBtn.addEventListener('click', () => {
        winModal.classList.remove('is-active');
        gameLoop();
    });
})();