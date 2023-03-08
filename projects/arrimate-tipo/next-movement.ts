import {countDots} from "./countDots.js";
import {giveMeDots} from "./give-me-dots.js";


function getUnchangedLinesBefore(line: number, board: ("x" | "y" | ".")[][]): ("x" | "y" | ".")[][] {
    let linesUnchanged = [];
    for (let i = 1; i < line; i++) {
        linesUnchanged.push(board[i - 1]);
    }
    return linesUnchanged;
}

function getUnchangedLinesAfter(line: number, board: ("x" | "y" | ".")[][]): ("x" | "y" | ".")[][] {
    let linesUnchanged = [];
    for (let i = line; i < board.length; i++) {
        linesUnchanged.push(board[i]);
    }
    return linesUnchanged;
}

function ensureLineValueIsValid(line: number, board: ("x" | "y" | ".")[][]): any {
    if (line < 1 || line > board.length) {
        throw "invalid line value";
    }
}

export function ensurePlayerCanMove(dotsBetween: number, steps: number): any {
    if (dotsBetween === 0 || steps < 0 || steps > dotsBetween) {
        throw "invalid movement";
    }
}

function getLine({dotsAfter, dotsBefore, dotsBetween}: any): ("x" | "y" | ".")[] {
    return [
        ...giveMeDots(dotsBefore),
        "x",
        ...giveMeDots(dotsBetween),
        "y",
        ...giveMeDots(dotsAfter)
    ];
}

function getChangedLine(board: ("x" | "y" | ".")[][], player: string, line: number, steps: number): ("x" | "y" | ".")[] {
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

export function nextMovement(board: ("x" | "y" | ".")[][], player: string, line: number, steps: number): ("x" | "y" | ".")[][] {
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

