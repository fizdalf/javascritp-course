export declare class Line {
    private _cells;
    constructor(cells: ('x' | 'y' | '.')[]);
    get cells(): ("x" | "y" | ".")[];
    getChangedLine(player: string, steps: number): Line;
    private countDots;
    private ensurePlayerCanMove;
    private getLine;
    private giveMeDots;
    isValidMovement(steps: number): boolean;
    canMove(): boolean;
    width(): number;
}
