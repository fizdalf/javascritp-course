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

function ensurePlayerCanMove(dotsAfterXInitial, steps) {

    if (dotsAfterXInitial === 0 || steps < 0 || steps > dotsAfterXInitial) {
        throw "invalid movement";
    }

    // no se puede jugar 2 veces consecutivas
}

function getChangedLine(board, player, line, steps) {
    const lineIndex = line - 1;
    const {dotsBeforeX: dotsBeforeXInitial, dotsAfterX: dotsAfterXInitial, dotsAfterY: dotsAfterYInitial} = countDots(board[lineIndex]);
    ensurePlayerCanMove(dotsAfterXInitial, steps);
    if (player === "player1") {
        let modifiedDotsBeforePlayerOne = dotsBeforeXInitial + steps;
        let modifiedDotsBetweenPlayers = dotsAfterXInitial - steps;
        let modifiedDotsAfterPlayerTwo = dotsAfterYInitial;
        let dotsAfterX = giveMeDots(modifiedDotsBetweenPlayers);
        let dotsBeforeX = giveMeDots(modifiedDotsBeforePlayerOne);
        let dotsAfterY = giveMeDots(modifiedDotsAfterPlayerTwo );
        return [...dotsBeforeX, "x", ...dotsAfterX, "y", ...dotsAfterY];
    }
    if (player === "player2") {
        let dotsBeforeX = giveMeDots(dotsBeforeXInitial);
        let dotsAfterX = giveMeDots(dotsAfterXInitial - steps);
        let dotsAfterY = giveMeDots(dotsAfterYInitial + steps);
        return [...dotsBeforeX, "x", ...dotsAfterX, "y", ...dotsAfterY];
    }
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
