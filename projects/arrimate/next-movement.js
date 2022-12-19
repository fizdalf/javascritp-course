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

        if (board[0][1] === 'x') {
            let dotsAfterX = giveMeDots(2)
            let dotsBeforeX = giveMeDots(2);
            return [[...dotsBeforeX, "x", ...dotsAfterX, "y"]];
        } else if (board[0][2] === 'x') {
            let dotsAfterX = giveMeDots(1);
            let dotsBeforeX = giveMeDots(3);
            return [[...dotsBeforeX, "x", ...dotsAfterX, "y"]];
        } else if (board[0][3] === 'x') {
            let dotsAfterX = giveMeDots(0);
            let dotsBeforeX = giveMeDots(4);
            return [[...dotsBeforeX, "x", ...dotsAfterX, "y"]];
        } else {
            let numberOfDotsWeNeed = board[0].length - 3;
            let dotsAfterX = giveMeDots(numberOfDotsWeNeed);
            let dotsBeforeX = giveMeDots(1);
            return [[...dotsBeforeX, "x", ...dotsAfterX, "y"]];
        }
    }
    throw "invalid movement";
}
