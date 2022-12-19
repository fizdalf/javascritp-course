module.exports = nextMovement;

function giveMeDots(numberOfDotsWeNeed) {
    let dots = [];

    while (dots.length < numberOfDotsWeNeed) {
        dots.push(".");
    }
    return dots;
}

function nextMovement(board, player, line, moves) {

    if (board[0].length > 2) {
        let dotsAfterX;
        let dotsBeforeX;
        if (board[0][1] === 'x') {
            let dotsBeforeModifier = 4;
            let dotsAfterModifier = 4;
            dotsBeforeX = giveMeDots(board[0].length - dotsBeforeModifier);
            dotsAfterX = giveMeDots(board[0].length - dotsAfterModifier)
        } else if (board[0][2] === 'x') {
            let dotsBeforeModifier = 3;
            let dotsAfterModifier = 5;
            dotsBeforeX = giveMeDots(board[0].length - dotsBeforeModifier);
            dotsAfterX = giveMeDots(board[0].length - dotsAfterModifier);
        } else if (board[0][3] === 'x') {
            dotsBeforeX = giveMeDots(board[0].length - 2);
            dotsAfterX = giveMeDots(board[0].length - 6);
        } else {
            let numberOfDotsWeNeed = board[0].length - 3;
            dotsBeforeX = giveMeDots( board[0].length - board[0].length + 1 );
            dotsAfterX = giveMeDots(numberOfDotsWeNeed);
        }
        return [[...dotsBeforeX, "x", ...dotsAfterX, "y"]];
    }
    throw "invalid movement";
}
