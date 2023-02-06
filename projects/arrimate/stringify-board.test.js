const stringifyBoard = require('./stringify-board.js');
describe('stringifyBoard', function () {
    it('should print a string version of a board with just one line, and one cell containing a space', () => {
        const board = [
            [
                "."
            ]
        ]
        expect(stringifyBoard(board)).toStrictEqual("| 1 |\n+---+\n| . | <- 1\n+---+\n");
    });
    it('should print a string version of a board with just one line, and one cell containing a x', () => {
        const board = [
            [
                "x"
            ]
        ]
        expect(stringifyBoard(board)).toStrictEqual("| 1 |\n+---+\n| x | <- 1\n+---+\n");
    });
    it('should print a string version of a board with just one line, and one cell containing a y', () => {
        const board = [
            [
                "y"
            ]
        ]
        expect(stringifyBoard(board)).toStrictEqual("| 1 |\n+---+\n| y | <- 1\n+---+\n");
    });
    it('should print a string version of a board with just one line, and two cell containing one a x and one a y', () => {
        const board = [
            [
                "x", "y"
            ]
        ]
        expect(stringifyBoard(board)).toStrictEqual("| 1 | 2 |\n+---+---+\n| x | y | <- 1\n+---+---+\n");
    });
    it('should print a string version of a board with just one line, and three cells containing X, . and Y', () => {
        const board = [
            [
                "x", ".", "y"
            ]
        ]
        expect(stringifyBoard(board)).toStrictEqual("| 1 | 2 | 3 |\n+---+---+---+\n| x | . | y | <- 1\n+---+---+---+\n");
    });
    it('should print a string version of a board with just one line, and four cells containing X, ., . and Y', () => {
        const board = [
            [
                "x", ".", ".", "y"
            ]
        ]
        expect(stringifyBoard(board)).toStrictEqual("| 1 | 2 | 3 | 4 |\n+---+---+---+---+\n| x | . | . | y | <- 1\n+---+---+---+---+\n");
    });
});


