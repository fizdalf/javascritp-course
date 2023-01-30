const canMoveInLine = require (`./canMoveInLine`);

describe('canMoveInLine', function () {
    it('should return true if one dot is between x and y', () => {
        let board = [["x", ".", "y"]];
        let line = 1;
        expect(canMoveInLine(board, line)).toStrictEqual("true");
    });
    it('should return false if zero dots are between x and y', () => {
        let board = [["x", "y"]];
        let line = 1;
        expect(canMoveInLine(board, line)).toStrictEqual("false");
    });
});
