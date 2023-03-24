import { Line } from './Line';
export declare class Board {
    private readonly _lines;
    get lines(): Line[];
    constructor(lines: Line[]);
    nextMovement(player: string, lineNumber: number, steps: number): Board;
    isValidMovement(lineNumber: number, steps: number): boolean;
    canMoveInLine(lineNumber: number): boolean;
    private ensureLineValueIsValid;
    stringifyBoard(): string;
    private renderLine;
    private getHeader;
    private getSpacing;
}
