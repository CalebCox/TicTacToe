// 1 2 3
// 4 5 6
// 7 8 9

// enable game board once player has chosen X's or O'x disable operations.
// make sure AI is the correct piece (X or O).
// when space is clicked, check if available. If it is available
// Check if surrounding spaces are matched or not. If it is not available, do nothing.
var board = [
    ['','',''],
    ['','',''],
    ['','','']
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

// RE-WORK ALL OF THE BELOW INTO DRY CODE

$('.zero').click(function() {
    if(checkSpace(board[0][0])){
        board[0][0] = player;
        $('.zero').html("<p>" + player + "</p>");
    } else {
        alert('Space is not free, choose another');
    }
});

$('.one').click(function() {
    if(checkSpace(board[0][1])){
        board[0][1] = player;
        $('.one').html("<p>" + player + "</p>");
    } else {
        alert('Space is not free, choose another');
    }
});

$('.two').click(function() {
    if(checkSpace(board[0][2])){
        board[0][2] = player;
        $('.two').html("<p>" + player + "</p>");
    } else {
        alert('Space is not free, choose another');
    }
});

$('.three').click(function() {
    if(checkSpace(board[1][0])){
        board[1][0] = player;
        $('.three').html("<p>" + player + "</p>");
    } else {
        alert('Space is not free, choose another');
    }
});


$('.four').click(function() {
    if(checkSpace(board[1][1])){
        board[1][1] = player;
        $('.four').html("<p>" + player + "</p>");
    } else {
        alert('Space is not free, choose another');
    }
});


$('.five').click(function() {
    if(checkSpace(board[1][2])){
        board[1][2] = player;
        $('.five').html("<p>" + player + "</p>");
    } else {
        alert('Space is not free, choose another');
    }
});


$('.six').click(function() {
    if(checkSpace(board[2][0])){
        board[2][0] = player;
        $('.six').html("<p>" + player + "</p>");
    } else {
        alert('Space is not free, choose another');
    }
});

$('.seven').click(function() {
    if(checkSpace(board[2][1])){
        board[2][1] = player;
        $('.seven').html("<p>" + player + "</p>");
    } else {
        alert('Space is not free, choose another');
    }
});

$('.eight').click(function() {
    if(checkSpace(board[2][2])){
        board[2][2] = player;
        $('.eight').html("<p>" + player + "</p>");
    } else {
        alert('Space is not free, choose another');
    }
});

$('.box').click(function() {
   winCheck();
});

function winCheck() {
    if (board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X") {
        console.log(player + ' WINS!');
    } else {
        console.log('fails');
    }
}

function checkSpace(space) {
 if(space !== '') {
     console.log('Space isn\'t free please pick another!');
     return false;
 } else {
     console.log('Space is free, changing space to ' + player);
     return true;
 }
}