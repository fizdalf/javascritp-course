const countDots = require('./countDots.js');

function giveMeDots(numberOfDotsWeNeed) {
    let dots = [];

    while (dots.length < numberOfDotsWeNeed) {
        dots.push(".");
    }
    return dots;
}

function getUnchangedLinesBefore(line, board) {
    let linesUnchanged = [];
    for (let i = 1; i < line; i++) {
        linesUnchanged.push(board[i - 1]);
    }
    return linesUnchanged;
}

function getUnchangedLinesAfter(line, board) {
    let linesUnchanged = [];
    for (let i = line; i < board.length; i++) {
        linesUnchanged.push(board[line]);
    }
    return linesUnchanged;
}

function nextMovement(board, player, line, moves) {
    if (line < 1) {
        throw "invalid line value";
    }
    const lineIndex = line - 1;
    const countedDots = countDots(board[lineIndex]);
    const dotsBeforeXInitial = countedDots.dotsBeforeX;
    const dotsAfterXInitial = countedDots.dotsAfterX;
    if (dotsAfterXInitial === 0) {
        throw "invalid movement";
    }
    let dotsBeforeX = giveMeDots(dotsBeforeXInitial + 1);
    let dotsAfterX = giveMeDots(dotsAfterXInitial - 1);
    let linesUnchangedBefore = getUnchangedLinesBefore(line, board);
    let linesUnchangedAfter = getUnchangedLinesAfter(line, board);
    return [
        ...linesUnchangedBefore,
        [...dotsBeforeX, "x", ...dotsAfterX, "y"],
        ...linesUnchangedAfter
    ];
}

module.exports = nextMovement;
