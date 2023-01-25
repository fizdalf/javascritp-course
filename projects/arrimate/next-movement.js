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
        linesUnchanged.push(board[i]);
    }
    return linesUnchanged;
}

function ensureLineValueIsValid(line, board) {
    if (line < 1 || line > board.length) {
        throw "invalid line value";
    }
}

function ensurePlayerCanMove(dotsAfterXInitial, steps) {

    if (dotsAfterXInitial === 0 || steps < 0 || steps > dotsAfterXInitial) {
        throw "invalid movement";
    }

    // no se puede jugar 2 veces consecutivas
}

function getLine({dotsAfter, dotsBefore, dotsBetween}) {
    return [
        ...giveMeDots(dotsBefore),
        "x",
        ...giveMeDots(dotsBetween),
        "y",
        ...giveMeDots(dotsAfter)
    ];
}

function getChangedLine(board, player, line, steps) {
    const lineIndex = line - 1;
    const {
        dotsBefore: dotsBeforeXInitial,
        dotsBetween: dotsAfterXInitial,
        dotsAfter: dotsAfterYInitial
    } = countDots(board[lineIndex]);
    ensurePlayerCanMove(dotsAfterXInitial, steps);

    let modifiedDots = {
        dotsBefore: dotsBeforeXInitial,
        dotsBetween: dotsAfterXInitial - steps,
        dotsAfter: dotsAfterYInitial + steps,
    }
    if (player === "player1") {
        modifiedDots = {
            dotsBefore: dotsBeforeXInitial + steps,
            dotsBetween: dotsAfterXInitial - steps,
            dotsAfter: dotsAfterYInitial,
        }
    }
    return getLine(modifiedDots);
}

function nextMovement(board, player, line, steps) {
    ensureLineValueIsValid(line, board);
    const lineChanged = getChangedLine(board, player, line, steps);
    const linesUnchangedBefore = getUnchangedLinesBefore(line, board);
    const linesUnchangedAfter = getUnchangedLinesAfter(line, board);
    return [
        ...linesUnchangedBefore,
        lineChanged,
        ...linesUnchangedAfter
    ];
}

module.exports = nextMovement;
