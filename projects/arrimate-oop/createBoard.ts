import {Board} from "./Board";

import {BoardLine} from './types';


export function createBoard(dimension: number): Board {
    const line: BoardLine = giveMeLine(dimension);
    return new Board(new Array(dimension).fill(line));

}

function giveMeLine(numberOfLine: number): BoardLine {
    const dots = new Array(numberOfLine - 2).fill('.');
    return ["x", ...dots, "y"];
}
