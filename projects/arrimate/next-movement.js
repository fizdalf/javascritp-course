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
            dotsBeforeX = giveMeDots(3);
            dotsAfterX = giveMeDots(1);
        } else if (board[0][3] === 'x') {
            dotsBeforeX = giveMeDots(4);
            dotsAfterX = giveMeDots(0);
        } else {
            let numberOfDotsWeNeed = board[0].length - 3;
            dotsBeforeX = giveMeDots(1);
            dotsAfterX = giveMeDots(numberOfDotsWeNeed);
        }
        return [[...dotsBeforeX, "x", ...dotsAfterX, "y"]];
    }
    throw "invalid movement";
}
