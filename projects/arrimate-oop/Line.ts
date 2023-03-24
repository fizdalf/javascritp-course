export class Line {
    private _cells: ('x' | 'y' | '.')[] = [];

    constructor(cells: ('x' | 'y' | '.')[]) {
        this._cells = cells;
    }

    get cells(): ("x" | "y" | ".")[] {
        return this._cells;
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
            if (this._cells[i] === "x") {
                seenXAlready = true;
            }

            if (this._cells[i] === "y") {
                seenYAlready = true;
            }

            if (this._cells[i] === ".") {
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
            "x",
            ...this.giveMeDots(dotsBetween),
            "y",
            ...this.giveMeDots(dotsAfter)
        ]);
    }

    private giveMeDots(dotsWeNeed: number): "."[] {
        return new Array(dotsWeNeed).fill('.');
    }

}
