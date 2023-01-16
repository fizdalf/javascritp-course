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
    let thirdLine = board[2];
    if (line === 2) {
        const linesUnchanged = [
            firstLine,
        ];
        return [
            ...linesUnchanged,
            [...dotsBeforeX, "x", ...dotsAfterX, "y"]
        ];
    }
    let linesUnchanged = [];
    if (line === 3) {
        linesUnchanged = [
            firstLine,
            secondLine,
        ];
    }


    if (line === 4) {
        linesUnchanged = [
            firstLine,
            secondLine,
            thirdLine,
        ];
    }
    return [
        ...linesUnchanged,
        [...dotsBeforeX, "x", ...dotsAfterX, "y"]
    ];
}

module.exports = nextMovement;
