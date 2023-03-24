import {Board} from "./Board";
import {CellType, Line} from './Line';


export function createBoard(dimension: number): Board {
    const line: Line = giveMeLine(dimension);
    return new Board(new Array(dimension).fill(line));

}

function giveMeLine(numberOfLine: number): Line {
    const dots = new Array(numberOfLine - 2).fill(CellType.EmptySpace);
    return new Line([CellType.Player1, ...dots, CellType.Player2]);
}
