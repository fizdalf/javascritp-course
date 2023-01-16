const countDots = require('./countDots.js');

function giveMeDots(numberOfDotsWeNeed) {
    let dots = [];

    while (dots.length < numberOfDotsWeNeed) {
        dots.push(".");
    }
    return dots;
}

function nextMovement(board, player, line, moves) {
    const lineIndex = line - 1;
    const countedDots = countDots(board[lineIndex]);
    const dotsBeforeXInitial = countedDots.dotsBeforeX;
    const dotsAfterXInitial = countedDots.dotsAfterX;
    if (dotsAfterXInitial === 0) {
        throw "invalid movement";
    }
    let dotsBeforeX = giveMeDots(dotsBeforeXInitial + 1);
    let dotsAfterX = giveMeDots(dotsAfterXInitial - 1);
    let linesUnchanged = [];
    if (line === 2) {
        linesUnchanged = [
            board[0],
        ];
    }

    if (line === 3) {
        linesUnchanged = [
            board[0],
            board[1],
        ];
    }

    if (line === 4) {
        linesUnchanged = [
            board[0],
            board[1],
            board[2],
        ];
    }
    return [
        ...linesUnchanged,
        [...dotsBeforeX, "x", ...dotsAfterX, "y"]
    ];
}

module.exports = nextMovement;
