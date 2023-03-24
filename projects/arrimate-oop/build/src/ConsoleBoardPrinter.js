"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleBoardPrinter = void 0;
class ConsoleBoardPrinter {
    print(board) {
        const lines = board.lines;
        return this.getHeader(lines) + this.getSpacing(lines) + lines.map((line, index) => this.renderLine(index, lines) + this.getSpacing(lines)).join("");
    }
    renderLine(lineIndex, lines) {
        const lineNumber = lineIndex + 1;
        return '|' + lines[lineIndex].cells.map(x => ` ${x} `).join('|') + '|' + " <- " + lineNumber + '\n';
    }
    getHeader(lines) {
        return '|' + (Array.from(Array(lines[0].cells).keys())).map(x => ` ${x + 1} `).join('|') + '|' + "\n";
    }
    getSpacing(lines) {
        return "+" + (new Array(lines[0].width())).fill('---').join('+') + "+" + "\n";
    }
}
exports.ConsoleBoardPrinter = ConsoleBoardPrinter;
//# sourceMappingURL=ConsoleBoardPrinter.js.map