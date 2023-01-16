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

function ensureLineValueIsValid(line, board) {
    if (line < 1 || line > board.length) {
        throw "invalid line value";
    }
}

function ensureXCanMove(dotsAfterXInitial) {
    if (dotsAfterXInitial === 0) {
        throw "invalid movement";
    }
}

function getChangedLine(line, board) {
    const lineIndex = line - 1;
    const {dotsBeforeX: dotsBeforeXInitial, dotsAfterX: dotsAfterXInitial} = countDots(board[lineIndex]);
    ensureXCanMove(dotsAfterXInitial);
    let dotsBeforeX = giveMeDots(dotsBeforeXInitial + 1);
    let dotsAfterX = giveMeDots(dotsAfterXInitial - 1);
    return [...dotsBeforeX, "x", ...dotsAfterX, "y"];
}

function nextMovement(board, player, line, moves) {
    ensureLineValueIsValid(line, board);
    const lineChanged = getChangedLine(line, board);
    const linesUnchangedBefore = getUnchangedLinesBefore(line, board);
    const linesUnchangedAfter = getUnchangedLinesAfter(line, board);
    return [
        ...linesUnchangedBefore,
        lineChanged,
        ...linesUnchangedAfter
    ];
}

module.exports = nextMovement;
