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
    let firstLine = board[0];
    let secondLine = board[1];
    if (line === 2) {
        return [
            firstLine,
            [...dotsBeforeX, "x", ...dotsAfterX, "y"]
        ];
    }
    if (line === 3) {
        return [
            firstLine,
            secondLine,
            [...dotsBeforeX, "x", ...dotsAfterX, "y"]
        ]
    }
    return [
        [...dotsBeforeX, "x", ...dotsAfterX, "y"]
    ];
}

module.exports = nextMovement;
