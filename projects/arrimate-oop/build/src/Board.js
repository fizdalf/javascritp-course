"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const Line_1 = require("./Line");
class Board {
    constructor(lines) {
        this._lines = lines;
    }
    get lines() {
        return [...this._lines.map(x => new Line_1.Line(x.cells))];
    }
    nextMovement(player, lineNumber, steps) {
        this.ensureLineValueIsValid(lineNumber);
        const linesUnchangedBefore = this._lines.slice(0, lineNumber - 1);
        const lineChanged = this._lines[lineNumber].getChangedLine(player, steps);
        const linesUnchangedAfter = this._lines.slice(lineNumber, this._lines.length);
        return new Board([
            ...linesUnchangedBefore,
            lineChanged,
            ...linesUnchangedAfter
        ]);
    }
    isValidMovement(lineNumber, steps) {
        return this._lines[lineNumber - 1].isValidMovement(steps);
    }
    canMoveInLine(lineNumber) {
        return this._lines[lineNumber - 1].canMove();
    }
    ensureLineValueIsValid(lineNumber) {
        if (lineNumber < 1 || lineNumber > this._lines.length) {
            throw "invalid line value";
        }
    }
    stringifyBoard() {
        // return getHeader(board) + getSpacing(board) + board.map((line, index) => renderLine(board, index + 1) + getSpacing(board)).join("");
        const header = this.getHeader();
        const spacing = this.getSpacing();
        let table = header + spacing;
        for (let i = 0; i < this._lines.length; i++) {
            const lineNumber = i + 1;
            table = table + this.renderLine(lineNumber) + spacing;
        }
        return table;
    }
    renderLine(lineNumber) {
        const index = lineNumber - 1;
        return '|' + this._lines[index].cells.map(x => ` ${x} `).join('|') + '|' + " <- " + lineNumber + '\n';
    }
    getHeader() {
        return '|' + (Array.from(Array(this._lines[0].cells).keys())).map(x => ` ${x + 1} `).join('|') + '|' + "\n";
    }
    getSpacing() {
        return "+" + (new Array(this._lines[0].width())).fill('---').join('+') + "+" + "\n";
    }
}
exports.Board = Board;
//# sourceMappingURL=Board.js.map