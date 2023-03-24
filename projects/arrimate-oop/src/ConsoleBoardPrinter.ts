import {BoardPrinter} from './BoardPrinter';
import {Board} from './Board';
import {Line} from './Line';

export class ConsoleBoardPrinter implements BoardPrinter {
    print(board: Board): string {
        const lines = board.lines;
        return this.getHeader(lines) + this.getSpacing(lines) + lines.map((line, index) => this.renderLine(index, lines) + this.getSpacing(lines)).join("");
    }

    private renderLine(lineIndex: number, lines: Line[]) {
        const lineNumber = lineIndex + 1;
        return '|' + lines[lineIndex].cells.map(x => ` ${x} `).join('|') + '|' + " <- " + lineNumber + '\n';
    }

    private getHeader(lines: Line[]): string {
        return '|' + (Array.from(Array(lines[0].cells).keys())).map(x => ` ${x + 1} `).join('|') + '|' + "\n";
    }

    private getSpacing(lines: Line[]): string {
        return "+" + (new Array(lines[0].width())).fill('---').join('+') + "+" + "\n";
    }
}
