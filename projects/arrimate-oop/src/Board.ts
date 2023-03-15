import {Line} from './Line';


export class Board {
    private readonly _lines: Line[];

    get lines(): Line[] {
        return [...this._lines.map(x => new Line(x.cells))];
    }

    constructor(lines: Line[]) {
        this._lines = lines;
    }

    nextMovement(player: string, lineNumber: number, steps: number) {
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

    isValidMovement(lineNumber: number, steps: number): boolean {
        return this._lines[lineNumber - 1].isValidMovement(steps);
    }

    canMoveInLine(lineNumber: number) {
        return this._lines[lineNumber - 1].canMove();
    }
    private ensureLineValueIsValid(lineNumber: number): void {
        if (lineNumber < 1 || lineNumber > this._lines.length) {
            throw "invalid line value";
        }
    }
    stringifyBoard(): string {
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



    private renderLine(lineNumber: number): string {
        const index = lineNumber - 1;
        return '|' + this._lines[index].cells.map(x => ` ${x} `).join('|') + '|' + " <- " + lineNumber + '\n';
    }

    private getHeader(): string {
        return '|' + (Array.from(Array(this._lines[0].cells).keys())).map(x => ` ${x + 1} `).join('|') + '|' + "\n";
    }

    private getSpacing(): string {
        return "+" + (new Array(this._lines[0].width())).fill('---').join('+') + "+" + "\n";
    }


}

