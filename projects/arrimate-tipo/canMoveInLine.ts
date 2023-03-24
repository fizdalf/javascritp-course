import {countDots} from "./countDots.js";
import {Board} from './types';

export function canMoveInLine(board: Board, line: number): boolean {
    const result = countDots(board[line - 1]);
    return result.dotsBetween > 0;
}


