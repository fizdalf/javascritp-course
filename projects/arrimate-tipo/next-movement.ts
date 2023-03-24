import {countDots} from "./countDots.js";
import {giveMeDots} from "./give-me-dots.js";
import {Board, BoardLine} from './types';


function getUnchangedLinesBefore(line: number, board: Board): Board {
    let linesUnchanged = [];
    for (let i = 1; i < line; i++) {
        linesUnchanged.push(board[i - 1]);
    }
    return linesUnchanged;
}

function getUnchangedLinesAfter(line: number, board: Board): Board {
    let linesUnchanged = [];
    for (let i = line; i < board.length; i++) {
        linesUnchanged.push(board[i]);
    }
    return linesUnchanged;
}

function ensureLineValueIsValid(line: number, board: Board): any {
    if (line < 1 || line > board.length) {
        throw "invalid line value";
    }
}

export function ensurePlayerCanMove(dotsBetween: number, steps: number): any {
    if (dotsBetween === 0 || steps < 0 || steps > dotsBetween) {
        throw "invalid movement";
    }
}

function getLine({dotsAfter, dotsBefore, dotsBetween}: any): BoardLine {
    return [
        ...giveMeDots(dotsBefore),
        "x",
        ...giveMeDots(dotsBetween),
        "y",
        ...giveMeDots(dotsAfter)
    ];
}

function getChangedLine(board: Board, player: string, line: number, steps: number): BoardLine {
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

export function nextMovement(board: Board, player: string, line: number, steps: number): Board {
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

