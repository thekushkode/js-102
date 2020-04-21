// tic tac toe

gameArray = ["X", "O", null];
emptyArray = [];

// May not need parameters..

function ticTacToe(tic, tac) {

    for (let i = 0; i < 9; i++) {
        let boardPiece = gameArray[Math.floor(Math.random() * gameArray.length)];
        emptyArray.push(boardPiece);
    }
    if ((emptyArray[0] === tic && emptyArray[1] === tic && emptyArray[2] === tic) || (emptyArray[3] === tic && emptyArray[4] === tic && emptyArray[5] === tic) || (emptyArray[6] === tic && emptyArray[7] === tic && emptyArray[8] === tic) || (emptyArray[0] === tic && emptyArray[4] === tic && emptyArray[8] === tic) || (emptyArray[2] === tic && emptyArray[4] === tic && emptyArray[6] === tic) || (emptyArray[0] === tic && emptyArray[3] === tic && emptyArray[6] === tic) || (emptyArray[1] === tic && emptyArray[4] === tic && emptyArray[7] === tic) || (emptyArray[2] === tic && emptyArray[5] === tic && emptyArray[8] === tic)) {
        console.log("X wins!");
    } else if ((emptyArray[0] === tac && emptyArray[1] === tac && emptyArray[2] === tac) || (emptyArray[3] === tac && emptyArray[4] === tac && emptyArray[5] === tac) || (emptyArray[6] === tac && emptyArray[7] === tac && emptyArray[8] === tac) || (emptyArray[0] === tac && emptyArray[4] === tac && emptyArray[8] === tac) || (emptyArray[2] === tac && emptyArray[4] === tac && emptyArray[6] === tac) || (emptyArray[0] === tac && emptyArray[3] === tac && emptyArray[6] === tac) || (emptyArray[1] === tac && emptyArray[4] === tac && emptyArray[7] === tac) || (emptyArray[2] === tac && emptyArray[5] === tac && emptyArray[8] === tac)) {
        console.log("O Wins!");
    } else {
        console.log("Its a tie!");
    }
console.log(emptyArray);
}

ticTacToe("X", "O");



gameArray = ["X", "O", null];
emptyArray = [];

