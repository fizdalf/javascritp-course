import {countDots} from "./countDots.js";
import {ensurePlayerCanMove} from "./next-movement.js";


export function canMoveInLine(board, lineNumber) {
   // const security = ensurePlayerCanMove(board[lineNumber - 1]);
    const result = countDots(board[lineNumber - 1]);
    return result.dotsBetween > 0;
}


