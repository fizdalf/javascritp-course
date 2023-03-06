import {countDots} from "./countDots.js";

export function canMoveInLine(board: ("x" | "y" | ".")[][], line: number): boolean {
    const result = countDots(board[line - 1]);
    return result.dotsBetween > 0;
}


