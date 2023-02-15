import {createBoard} from "./createBoard.js";

describe('createBoard', function () {
    it("should create a board of size 3x3 when given 3 as dimension", () => {
        let expectedBoard = [
            ["X", ".", "Y"],
            ["X", ".", "Y"],
            ["X", ".", "Y"],
        ];
        expect(createBoard(3)).toStrictEqual(expectedBoard);
    });
    it("should create a board of size 4x4 when given 4 as dimension", () => {
        let expectedBoard = [
            ["X", ".", ".", "Y"],
            ["X", ".", ".", "Y"],
            ["X", ".", ".", "Y"],
            ["X", ".", ".", "Y"],
        ];
        expect(createBoard(4)).toStrictEqual(expectedBoard);
    });
    it("should create a board of size 5x5 when given 5 as dimension", () => {
        let expectedBoard = [
            ["X", ".", ".", ".", "Y"],
            ["X", ".", ".", ".", "Y"],
            ["X", ".", ".", ".", "Y"],
            ["X", ".", ".", ".", "Y"],
            ["X", ".", ".", ".", "Y"],
        ];
        expect(createBoard(5)).toStrictEqual(expectedBoard);
    });

});
