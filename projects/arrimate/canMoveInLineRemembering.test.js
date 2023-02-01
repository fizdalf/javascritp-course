const canMoveInLineRemembering = require(`./canMoveInLineRemembering`);

describe('canMoveInLine', function () {
    it('should return true if one dot is between x and y', () => {
        let board = [["x", ".", "y"]];
        let line = 1;
        expect(canMoveInLineRemembering(board, line)).toStrictEqual(true);
    });
    it('should return false if zero dots are between x and y', () => {
        let board = [["x", "y"]];
        let line = 1;
        expect(canMoveInLineRemembering(board, line)).toStrictEqual(false);
    });
    it('should return true when board have "." between x and y', function () {
        let board = [["x", ".", ".", ".", ".", "y"]];
        let line = 1;
    });
    it('should return false when board have "." between x and y in the second line but in the 1 no', function () {
        let board = [["x", "y"]
            ["x", "y"]];
        let line = 1;
    });
});