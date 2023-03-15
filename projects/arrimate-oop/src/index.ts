import {Board} from './Board';
import {CellType, Line} from './Line';

const board = new Board([
    new Line([CellType.Player1, CellType.EmptySpace, CellType.Player2])
]);
console.log(board.lines[0].cells[0]);
const lines = board.lines;

const line1: Line = lines[0];
line1.cells[0] = CellType.EmptySpace;
lines.splice(0, 1);

console.log(board.lines[0].cells[0]);
