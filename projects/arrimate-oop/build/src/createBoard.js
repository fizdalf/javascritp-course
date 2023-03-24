"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBoard = void 0;
const Board_1 = require("./Board");
const Line_1 = require("./Line");
function createBoard(dimension) {
    const line = giveMeLine(dimension);
    return new Board_1.Board(new Array(dimension).fill(line));
}
exports.createBoard = createBoard;
function giveMeLine(numberOfLine) {
    const dots = new Array(numberOfLine - 2).fill('.');
    return new Line_1.Line(["x", ...dots, "y"]);
}
//# sourceMappingURL=createBoard.js.map