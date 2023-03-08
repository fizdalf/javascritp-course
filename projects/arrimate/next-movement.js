import {countDots} from "./countDots.js";
import {giveMeDots} from "./give-me-dots.js";


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

export function ensurePlayerCanMove(dotsBetween, steps) {
    if (dotsBetween === 0 || steps < 0 || steps > dotsBetween) {
        throw "invalid movement";
    }
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
        dotsBefore: initialDotsBefore,
        dotsBetween: initialDotsBetween,
        dotsAfter: initialDotsAfter
    } = countDots(board[lineIndex]);
    ensurePlayerCanMove(initialDotsBetween, steps);

    let modifiedDots = {
        dotsBefore: initialDotsBefore,
        dotsBetween: initialDotsBetween - steps,
        dotsAfter: initialDotsAfter + steps,
    }
    if (player === "player1") {
        modifiedDots = {
            dotsBefore: initialDotsBefore + steps,
            dotsBetween: initialDotsBetween - steps,
            dotsAfter: initialDotsAfter,
        }
    }
    return getLine(modifiedDots);
}

export function nextMovement(board, player, line, steps) {
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

