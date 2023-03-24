import {giveMeDots} from "./give-me-dots.js";
import {Board, BoardLine} from './types';

export function createBoard(dimension: number): Board {
    const line: BoardLine = giveMeLine(dimension);
    return new Array(dimension).fill(line);

}

function giveMeLine(numberOfLine: number): BoardLine {
    const dots = giveMeDots(numberOfLine - 2);
    return ["x", ...dots, "y"];
}
