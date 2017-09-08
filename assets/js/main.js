// 1 2 3
// 4 5 6
// 7 8 9

// enable game board once player has chosen X's or O'x disable operations.
// make sure AI is the correct piece (X or O).
// when space is clicked, check if available. If it is available
// Check if surrounding spaces are matched or not. If space is not available, do nothing.
var board = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
];

var unavailableSpace = [];

var player,
    computer,
    turn;

var draw = false;
var endGame = false;

$('.X').click(function() {
    endGame = false;
    turn = false;
    player = 'X';
    computer = 'O';
    $('.operations').addClass('hide');
    $('.container').removeClass('hide');
});

$('.O').click(function() {
    endGame = false;
    turn = true;
    player = 'O';
    computer = 'X';
    $('.operations').addClass('hide');
    $('.container').removeClass('hide');
    computerAI();
});

$('.box').click(function() {
    $this = $(this);
    const i = $this.data('i');
    const j = $this.data('j');

    if (checkSpace(board[i][j])) {
        $this.html(player);
        board[i][j] = player;
        unavailableSpace.push('');
        turn = true;
        if (!checkGameOver(board)) {
            computerAI();
        } else {
            gameOver();
        }

    } else {
        alert('Space isn\'t free!');
    }

    if (checkGameOver(board)) {
        gameOver();
    }
});

function checkGameOver(checkBoard) {
    // check horizontal
    for (var i = 0; i < 3; i++) {
        if (checkBoard[i][0] !== ' ' && checkBoard[i][0] === checkBoard[i][1] && checkBoard[i][0] === checkBoard[i][2]) {
            return checkBoard[i][0];
        }
    }

    // check vertical
    for (var j = 0; j < 3; j++) {
        if (checkBoard[0][j] !== ' ' && checkBoard[0][j] === checkBoard[1][j] && checkBoard[0][j] === checkBoard[2][j]) {
            return checkBoard[0][j];
        }
    }

    // check bottom left to top right
    if (checkBoard[0][0] !== ' ' && checkBoard[0][0] === checkBoard[1][1] && checkBoard[0][0] === checkBoard[2][2]) {
        return checkBoard[0][0];
    }

    // check bottom right to top left
    if (checkBoard[2][0] !== ' ' && checkBoard[2][0] === checkBoard[1][1] && checkBoard[2][0] === checkBoard[0][2]) {
        return checkBoard[2][0];
    }

    // check if no moves available
    if (unavailableSpace.length === 9) {
        draw = true;
        return draw;
    }
    return null;
}

function gameOver() {
    // check what the end game state is
    if (checkGameOver(board) === computer && !endGame) {
        alert('Game Over! ' + computer + ' Won!');
        endGame = true;
    } else if (checkGameOver(board) === player && !endGame) {
        alert('Game Over! ' + player + ' Won!');
        endGame = true;
    } else if (draw && !endGame) {
        alert('Game Over! Looks like it\'s a draw');
        endGame = true;
    }

    //reset board, available spaces and DOM
    $('.container').addClass('hide');
    $('.operations').removeClass('hide');

    board = [
        [' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' ']
    ];

    unavailableSpace = [];

    $('.box').html('');
}

function checkSpace(space) {
    //is space empty? if not check board state
     if (space !== ' ') {
         if (checkGameOver(board)) {
             gameOver();
         } else {
             if (!turn) {
                 alert('Space isn\'t free please pick another!');
             }
             return false;
         }
     } else if (!turn){
         return true;
     } else if (turn) {
         return true;
     }
}

function computerAI() {
    // if computers turn is true, randomize move based on available spaces
    if (turn) {
        i = (Math.floor(Math.random() * 3) + 1) - 1;
        j = (Math.floor(Math.random() * 3) + 1) - 1;
        if (checkSpace(board[i][j])) {
            board[i][j] = computer;
            $(".box[data-i='" + i + "'][data-j='" + j + "']").html(computer);
            unavailableSpace.push('');
            turn = false;
        } else { // if space is unavailable, re-run.
            computerAI();
        }
        checkGameOver(board);
    }
}