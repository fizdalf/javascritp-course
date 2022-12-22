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
        let dotsAfterModifier = 3;
        let dotsBeforeModifier = board[0].length - 1;
        if (board[0][1] === 'x') {
            dotsBeforeModifier = 4;
            dotsAfterModifier = 4;
        } else if (board[0][2] === 'x') {
            dotsBeforeModifier = 3;
            dotsAfterModifier = 5;
        } else if (board[0][3] === 'x') {
            dotsBeforeModifier = 2;
            dotsAfterModifier = 6;
        }
        dotsBeforeX = giveMeDots(board[0].length - dotsBeforeModifier);
        dotsAfterX = giveMeDots(board[0].length - dotsAfterModifier);
        return [[...dotsBeforeX, "x", ...dotsAfterX, "y"]];
    }
    throw "invalid movement";
}


