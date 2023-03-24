"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Board_1 = require("./Board");
const Line_1 = require("./Line");
const board = new Board_1.Board([
    new Line_1.Line(["x", ".", "y"])
]);
console.log(board.lines[0].cells[0]);
const lines = board.lines;
const line1 = lines[0];
line1.cells[0] = ".";
console.log(board.lines[0].cells[0]);
//# sourceMappingURL=index.js.map