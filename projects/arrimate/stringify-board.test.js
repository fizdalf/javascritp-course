const stringifyBoard = require('./stringify-board.js');
describe('stringifyBoard', function () {
    it('should print a string version of a board with just one line, and one cell containing a space', () => {
        const boardWithJustOneCell = [
            [
                "."
            ]
        ]
        expect(stringifyBoard(boardWithJustOneCell)).toStrictEqual("| 1 |\n+---+\n| . | <- 1\n+---+\n");
    });
    it('should print a string version of a board with just one line, and one cell containing a x', () => {
        const boardWithJustOneCell = [
            [
                "x"
            ]
        ]
        expect(stringifyBoard(boardWithJustOneCell)).toStrictEqual("| 1 |\n+---+\n| x | <- 1\n+---+\n");
    });
});


