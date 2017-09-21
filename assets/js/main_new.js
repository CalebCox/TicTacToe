// Minimax refactor, work in progress


// setup game object

var game = {
    player: "",
    computer: "",
    board: [
        [' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' ']
    ],
    computerTurn: false,
    draw: false,
    endGame: false,
    unavailable: []
};

$(".X").click(function() {
    game.endGame = false;
    game.computerTurn = false;
    game.player = "X";
    game.computer = "O";
    $('.operations').addClass('hide');
    $('.container').removeClass('hide');
});

$('.O').click(function() {
    game.endGame = false;
    game.computerTurn = true;
    game.player = 'O';
    game.computer = 'X';
    $('.operations').addClass('hide');
    $('.container').removeClass('hide');
    computerAI();
});

