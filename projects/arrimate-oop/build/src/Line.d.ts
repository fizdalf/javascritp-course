export declare enum CellType {
    Player1 = "x",
    Player2 = "y",
    EmptySpace = "."
}
export declare class Line {
    private readonly _cells;
    constructor(cells: CellType[]);
    get cells(): CellType[];
    getChangedLine(player: string, steps: number): Line;
    private countDots;
    private ensurePlayerCanMove;
    private getLine;
    private giveMeDots;
    isValidMovement(steps: number): boolean;
    canMove(): boolean;
    width(): number;
}
