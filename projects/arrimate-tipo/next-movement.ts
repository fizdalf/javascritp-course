import {countDots} from "./countDots.js";
import {giveMeDots} from "./give-me-dots.js";


<<<<<<< HEAD
function getUnchangedLinesBefore(line: number, board: string | any[]) {
=======
function getUnchangedLinesBefore(line: number, board: ("x" | "y" | ".")[][]): ("x" | "y" | ".")[][] {
>>>>>>> c25d29a (challengesº)
    let linesUnchanged = [];
    for (let i = 1; i < line; i++) {
        linesUnchanged.push(board[i - 1]);
    }
    return linesUnchanged;
}

<<<<<<< HEAD
function getUnchangedLinesAfter(line: any, board: string | any[]) {
=======
function getUnchangedLinesAfter(line: number, board: ("x" | "y" | ".")[][]): ("x" | "y" | ".")[][] {
>>>>>>> c25d29a (challengesº)
    let linesUnchanged = [];
    for (let i = line; i < board.length; i++) {
        linesUnchanged.push(board[i]);
    }
    return linesUnchanged;
}

<<<<<<< HEAD
function ensureLineValueIsValid(line: number, board: string | any[]) {
=======
function ensureLineValueIsValid(line: number, board: ("x" | "y" | ".")[][]): any {
>>>>>>> c25d29a (challengesº)
    if (line < 1 || line > board.length) {
        throw "invalid line value";
    }
}

<<<<<<< HEAD
function ensurePlayerCanMove(dotsBetween: number, steps: number) {
=======
export function ensurePlayerCanMove(dotsBetween: number, steps: number): any {
>>>>>>> c25d29a (challengesº)
    if (dotsBetween === 0 || steps < 0 || steps > dotsBetween) {
        throw "invalid movement";
    }
}

<<<<<<< HEAD
// @ts-ignore
function getLine({dotsAfter, dotsBefore, dotsBetween}) {
=======
function getLine({dotsAfter, dotsBefore, dotsBetween}: any): string[] {
>>>>>>> c25d29a (challengesº)
    return [
        ...giveMeDots(dotsBefore),
        "x",
        ...giveMeDots(dotsBetween),
        "y",
        ...giveMeDots(dotsAfter)
    ];
}

<<<<<<< HEAD
function getChangedLine(board: string | any[], player: string, line: number, steps: number) {
=======
function getChangedLine(board: ("x" | "y" | ".")[][], player: string, line: number, steps: number): string[] {
>>>>>>> c25d29a (challengesº)
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

<<<<<<< HEAD
export function nextMovement(board: string | any[], player: string, line: number, steps: number) {
=======
export function nextMovement(board: ("x" | "y" | ".")[][], player: string, line: number, steps: number): string[][] {
>>>>>>> c25d29a (challengesº)
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

