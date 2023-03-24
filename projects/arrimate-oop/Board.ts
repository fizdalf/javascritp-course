import {Line} from './Line';


export class Board {
    private readonly lines: Line[];

    constructor(lines: Line[]) {
        this.lines = lines;
    }

    nextMovement(player: string, line: number, steps: number) {
        this.ensureLineValueIsValid(line);
        const lineChanged = this.getChangedLine(player, line, steps);
        const linesUnchangedBefore = this.getUnchangedLinesBefore(line);
        const linesUnchangedAfter = this.getUnchangedLinesAfter(line);
        return new Board([
            ...linesUnchangedBefore,
            lineChanged,
            ...linesUnchangedAfter
        ]);
    }

    isValidMovement(lineNumber: number, steps: number): boolean {
        let lineIndex = lineNumber - 1;
        const line = this.lines[lineIndex];
        const {dotsBetween} = this.countDots(line);
        return steps >= 1 && steps <= dotsBetween;
    }

    canMoveInLine(lineNumber: number) {
        const result = this.countDots(this.lines[lineNumber - 1]);
        return result.dotsBetween > 0;
    }

    stringifyBoard(): string {
        // return getHeader(board) + getSpacing(board) + board.map((line, index) => renderLine(board, index + 1) + getSpacing(board)).join("");
        const header = this.getHeader();
        const spacing = this.getSpacing();
        let table = header + spacing;
        for (let i = 0; i < this.lines.length; i++) {
            const lineNumber = i + 1;
            table = table + this.renderLine(lineNumber) + spacing;
        }
        return table;
    }

    private ensureLineValueIsValid(line: number) {
        if (line < 1 || line > this.lines.length) {
            throw "invalid line value";
        }
    }

    private getChangedLine(player: string, line: number, steps: number) {
        const lineIndex = line - 1;
        let line1 = this.lines[lineIndex];
        return line1.getChangedLine(player, steps);
    }



    private getUnchangedLinesBefore(line: number): Line[] {
        let linesUnchanged: Line[] = [];
        for (let i = 1; i < line; i++) {
            linesUnchanged.push(this.lines[i - 1]);
        }
        return linesUnchanged;
    }

    private getUnchangedLinesAfter(line: number): Line[] {
        let linesUnchanged: Line[] = [];
        for (let i = line; i < this.lines.length; i++) {
            linesUnchanged.push(this.lines[i]);
        }
        return linesUnchanged;
    }

    private renderLine(line: number): string {
        const index = line - 1;
        let line1 = this.lines[index];
        return '|' + line1.cells.map(x => ` ${x} `).join('|') + '|' + " <- " + line + '\n';
    }

    private getHeader(): string {
        return '|' + (Array.from(Array(this.lines[0].cells).keys())).map(x => ` ${x + 1} `).join('|') + '|' + "\n";
    }

    private getSpacing(): string {
        return "+" + (new Array(this.lines[0].cells.length)).fill('---').join('+') + "+" + "\n";
    }






}

