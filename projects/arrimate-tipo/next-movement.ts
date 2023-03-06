import {countDots} from "./countDots.js";
import {giveMeDots} from "./give-me-dots.js";


function getUnchangedLinesBefore(line: number, board: string | any[]) {
    let linesUnchanged = [];
    for (let i = 1; i < line; i++) {
        linesUnchanged.push(board[i - 1]);
    }
    return linesUnchanged;
}

function getUnchangedLinesAfter(line: any, board: string | any[]) {
    let linesUnchanged = [];
    for (let i = line; i < board.length; i++) {
        linesUnchanged.push(board[i]);
    }
    return linesUnchanged;
}

function ensureLineValueIsValid(line: number, board: string | any[]) {
    if (line < 1 || line > board.length) {
        throw "invalid line value";
    }
}

function ensurePlayerCanMove(dotsBetween: number, steps: number) {
    if (dotsBetween === 0 || steps < 0 || steps > dotsBetween) {
        throw "invalid movement";
    }
}

// @ts-ignore
function getLine({dotsAfter, dotsBefore, dotsBetween}) {
    return [
        ...giveMeDots(dotsBefore),
        "x",
        ...giveMeDots(dotsBetween),
        "y",
        ...giveMeDots(dotsAfter)
    ];
}

function getChangedLine(board: string | any[], player: string, line: number, steps: number) {
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

export function nextMovement(board: string | any[], player: string, line: number, steps: number) {
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

