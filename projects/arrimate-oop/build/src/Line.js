"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Line = exports.CellType = void 0;
var CellType;
(function (CellType) {
    CellType["Player1"] = "x";
    CellType["Player2"] = "y";
    CellType["EmptySpace"] = ".";
})(CellType = exports.CellType || (exports.CellType = {}));
class Line {
    constructor(cells) {
        this._cells = cells;
    }
    get cells() {
        return [...this._cells];
    }
    getChangedLine(player, steps) {
        const { dotsBefore: initialDotsBefore, dotsBetween: initialDotsBetween, dotsAfter: initialDotsAfter } = this.countDots();
        this.ensurePlayerCanMove(initialDotsBetween, steps);
        let modifiedDots = {
            dotsBefore: initialDotsBefore,
            dotsBetween: initialDotsBetween - steps,
            dotsAfter: initialDotsAfter + steps,
        };
        if (player === "player1") {
            modifiedDots = {
                dotsBefore: initialDotsBefore + steps,
                dotsBetween: initialDotsBetween - steps,
                dotsAfter: initialDotsAfter,
            };
        }
        return this.getLine(modifiedDots);
    }
    countDots() {
        let dotsBeforeX = 0;
        let dotsAfterX = 0;
        let dotsAfterY = 0;
        let seenXAlready = false;
        let seenYAlready = false;
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
    ensurePlayerCanMove(initialDotsBetween, steps) {
        if (initialDotsBetween === 0 || steps < 0 || steps > initialDotsBetween) {
            throw "invalid movement";
        }
    }
    getLine({ dotsAfter, dotsBefore, dotsBetween }) {
        return new Line([
            ...this.giveMeDots(dotsBefore),
            CellType.Player1,
            ...this.giveMeDots(dotsBetween),
            CellType.Player2,
            ...this.giveMeDots(dotsAfter)
        ]);
    }
    giveMeDots(dotsWeNeed) {
        return new Array(dotsWeNeed).fill('.');
    }
    isValidMovement(steps) {
        const { dotsBetween } = this.countDots();
        return steps >= 1 && steps <= dotsBetween;
    }
    canMove() {
        const { dotsBetween } = this.countDots();
        return dotsBetween > 0;
    }
    width() {
        return this._cells.length;
    }
}
exports.Line = Line;
//# sourceMappingURL=Line.js.map