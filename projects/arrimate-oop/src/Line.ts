export enum CellType {
    Player1 = "x",
    Player2 = "y",
    EmptySpace = "."
}

export class Line {
    private readonly _cells: CellType[];

    constructor(cells: CellType[]) {
        this._cells = cells;
    }

    get cells(): CellType[] {
        return [...this._cells];
    }

    getChangedLine(player: string, steps: number) {
        const {
            dotsBefore: initialDotsBefore,
            dotsBetween: initialDotsBetween,
            dotsAfter: initialDotsAfter
        } = this.countDots();
        this.ensurePlayerCanMove(initialDotsBetween, steps);

        let modifiedDots = {
            dotsBefore: initialDotsBefore,
            dotsBetween: initialDotsBetween - steps,
            dotsAfter: initialDotsAfter + steps,
        }
        if (player === "player1") {
            modifiedDots = {
                dotsBefore: initialDotsBefore + steps,
                dotsBetween: initialDotsBetween - steps,
                dotsAfter: initialDotsAfter,
            }
        }
        return this.getLine(modifiedDots);
    }

    private countDots(): {
        dotsBefore: number,
        dotsBetween: number,
        dotsAfter: number,
    } {
        let dotsBeforeX: number = 0;
        let dotsAfterX: number = 0;
        let dotsAfterY: number = 0;
        let seenXAlready: boolean = false;
        let seenYAlready: boolean = false;

        for (let i = 0; i < this._cells.length; i++) {
            if (this._cells[i] === CellType.Player1) {
                seenXAlready = true;
            }

            if (this._cells[i] === CellType.Player2) {
                seenYAlready = true;
            }

            if (this._cells[i] === CellType.EmptySpace) {
                if (!seenXAlready) {
                    dotsBeforeX++;
                    continue;
                }
                if (!seenYAlready) {
                    dotsAfterX++;
                    continue;
                }
                dotsAfterY++;
            }
        }

        return {
            dotsBefore: dotsBeforeX,
            dotsBetween: dotsAfterX,
            dotsAfter: dotsAfterY,
        };
    }

    private ensurePlayerCanMove(initialDotsBetween: number, steps: number) {
        if (initialDotsBetween === 0 || steps < 0 || steps > initialDotsBetween) {
            throw "invalid movement";
        }
    }

    private getLine({dotsAfter, dotsBefore, dotsBetween}: any): Line {
        return new Line([
            ...this.giveMeDots(dotsBefore),
            CellType.Player1,
            ...this.giveMeDots(dotsBetween),
           CellType.Player2,
            ...this.giveMeDots(dotsAfter)
        ]);
    }

    private giveMeDots(dotsWeNeed: number): CellType.EmptySpace[] {
        return new Array(dotsWeNeed).fill('.');
    }

    isValidMovement(steps: number) {
        const {dotsBetween} = this.countDots();
        return steps >= 1 && steps <= dotsBetween;
    }

    canMove() {
        const {dotsBetween} = this.countDots();
        return dotsBetween > 0;
    }
    width(): number {
        return this._cells.length;
    }
}
