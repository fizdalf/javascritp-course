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
            dotsBeforeX = giveMeDots(2);
            dotsAfterX = giveMeDots(2)
        } else if (board[0][2] === 'x') {
            let dotsBeforeX = giveMeDots(3);
            let dotsAfterX = giveMeDots(1);
            return [[...dotsBeforeX, "x", ...dotsAfterX, "y"]];
        } else if (board[0][3] === 'x') {
            let dotsBeforeX = giveMeDots(4);
            let dotsAfterX = giveMeDots(0);
            return [[...dotsBeforeX, "x", ...dotsAfterX, "y"]];
        } else {
            let numberOfDotsWeNeed = board[0].length - 3;
            let dotsBeforeX = giveMeDots(1);
            let dotsAfterX = giveMeDots(numberOfDotsWeNeed);
            return [[...dotsBeforeX, "x", ...dotsAfterX, "y"]];
        }
        return [[...dotsBeforeX, "x", ...dotsAfterX, "y"]];
    }
    throw "invalid movement";
}
