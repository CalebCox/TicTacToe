// 1 2 3
// 4 5 6
// 7 8 9

// enable game board once player has chosen X's or O'x disable operations.
// make sure AI is the correct piece (X or O).
// when space is clicked, check if available. If it is available
// Check if surrounding spaces are matched or not. If it is not available, do nothing.
var board = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
];

var player,
    computer;


$('.X').click(function() {
    player = 'X';
    computer = 'O';
    $('.operations').addClass('hide');
    $('.container').removeClass('hide');
});

$('.O').click(function() {
    player = 'O';
    computer = 'X';
    $('.operations').addClass('hide');
    $('.container').removeClass('hide');
});

$('.box').click(function() {
    $this = $(this);
    $this.html(player);
    const i = $this.data('i');
    const j = $this.data('j');
    board[i][j] = player;
    console.log(board);

    if (checkGameOver()) {
        console.log('Game Over!');
    }
});

function checkGameOver() {
    // check horizontal
    for (var i = 0; i < 3; i++) {
        if (board[i][0] !== ' ' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            return board[i][0] + " wins";
        }
    }

    // check vertical
    for (var j = 0; j < 3; j++) {
        if (board[0][j] !== ' ' && board[0][j] === board[1][j] && board[0][j] === board[2][j]) {
            return board[0][j] + " wins";
        }
    }

    // check bottom left to top right
    if (board[0][0] !== ' ' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return board[0][0] + " wins";
    }

    // check bottom right to top left
    if (board[2][0] !== ' ' && board[2][0] === board[1][1] && board[2][0] === board[0][2]) {
        return board[2][0] + " wins";
    }

    return null;
}

function checkSpace(space) {
 if(space !== ' ') {
     console.log('Space isn\'t free please pick another!');
     return false;
 } else {
     console.log('Space is free, changing space to ' + player);
     return true;
 }
}