// next movement, recibe lo siguientes parámetros (board, player, line, steps), debe indicar si la jugada es válida o
// no, lanzando un error en caso que no sea válida, y devolviendo el tablero modificado en caso de que lo sea


import {nextMovement} from "./next-movement.js";
import {Board} from './types';

describe('nextMovement', function () {
    it('si en un tablero de 1x2 la x se mueve 3 an error is thrown', () => {
        let board: Board = [["x", "y"]];
        let player = "player1";
        let line = 1;
        let steps = 1;
        expect(() => nextMovement(board, player, line, steps)).toThrow("invalid movement");
    });
    it('si en un tablero de 1x3 la x se mueve 1 it should return the modified board', () => {
        let board:Board = [["x", ".", "y"]];
        let player = "player1";
        let line = 1;
        let steps = 1;
        expect(nextMovement(board, player, line, steps)).toStrictEqual([[".", "x", "y"]]);
    });
    it('si en un tablero de 1x4 la x se mueve 1 it should return the modified board', () => {
        let board:Board = [["x", ".", ".", "y"]];
        let player = "player1";
        let line = 1;
        let steps = 1;
        expect(nextMovement(board, player, line, steps)).toStrictEqual([[".", "x", ".", "y"]]);
    });
    it('si en un tablero de 1x5 la x se mueve 1 it should return the modified board', () => {
        let board = [["x", ".", ".", ".", "y"]];
        let player = "player1";
        let line = 1;
        let steps = 1;
        expect(nextMovement(board, player, line, steps)).toStrictEqual([[".", "x", ".", ".", "y"]]);
    });

    it('si en un tablero de 1x6 la x se mueve 1 it should return the modified board', () => {
        let board = [[".", "x", ".", ".", ".", "y"]];
        let player = "player1";
        let line = 1;
        let steps = 1;
        expect(nextMovement(board, player, line, steps)).toStrictEqual([[".", ".", "x", ".", ".", "y"]]);
    });

    it('si en un tablero de 1x6 la x se mueve 1 it should return the modified board', () => {
        let board = [[".", ".", "x", ".", ".", "y"]];
        let player = "player1";
        let line = 1;
        let steps = 1;
        expect(nextMovement(board, player, line, steps)).toStrictEqual([[".", ".", ".", "x", ".", "y"]]);
    });
    it('si en un tablero de 1x6 la x se mueve 1 it should return the modified board', () => {
        let board = [[".", ".", ".", "x", ".", "y"]];
        let player = "player1";
        let line = 1;
        let steps = 1;
        expect(nextMovement(board, player, line, steps)).toStrictEqual([[".", ".", ".", ".", "x", "y"]]);
    });
    it('si en un tablero de 1x6 la x se mueve 1 it should return the modified board', () => {
        let board = [
            [".", ".", ".", ".", "x", "y"]
        ];
        let player = "player1";
        let line = 1;
        let steps = 1;
        expect(() => nextMovement(board, player, line, steps)).toThrow("invalid movement");
    });
    it("should return a modified board in the second line, when we make a move on it", () => {
        let board = [
            [".", ".", ".", ".", "x", "y"],
            [".", "x", ".", ".", ".", "y"]
        ];
        let player = "player1";
        let line = 2;
        let steps = 1;
        expect(nextMovement(board, player, line, steps)).toStrictEqual([[".", ".", ".", ".", "x", "y"], [".", ".", "x", ".", ".", "y"]]);
    });
    it("should return a modified board in the third line, when we make a move on it", () => {
        let board = [
            [".", ".", ".", ".", "x", "y"],
            [".", "x", ".", ".", ".", "y"],
            [".", ".", "x", ".", ".", "y"]
        ];
        let player = "player1";
        let line = 3;
        let steps = 1;
        let expectedResult = [
            [".", ".", ".", ".", "x", "y"],
            [".", "x", ".", ".", ".", "y"],
            [".", ".", ".", "x", ".", "y"]
        ];
        expect(nextMovement(board, player, line, steps)).toStrictEqual(expectedResult);
    });

    it("should return a modified board in the fourth line, when we make a move on it", () => {
        let board = [
            [".", ".", ".", ".", "x", "y"],
            [".", "x", ".", ".", ".", "y"],
            [".", ".", "x", ".", ".", "y"],
            ["x", ".", ".", ".", ".", "y"],
        ];
        let player = "player1";
        let line = 4;
        let steps = 1;
        let expectedResult = [
            [".", ".", ".", ".", "x", "y"],
            [".", "x", ".", ".", ".", "y"],
            [".", ".", "x", ".", ".", "y"],
            [".", "x", ".", ".", ".", "y"],
        ];
        expect(nextMovement(board, player, line, steps)).toStrictEqual(expectedResult);
    });
    it("should return a modified board in the first line, when we make a move on it", () => {
        let board = [
            [".", ".", ".", "x", ".", "y"],
            [".", "x", ".", ".", ".", "y"],
        ];
        let player = "player1";
        let line = 1;
        let steps = 1;
        let expectedResult = [
            [".", ".", ".", ".", "x", "y"],
            [".", "x", ".", ".", ".", "y"],
        ];
        expect(nextMovement(board, player, line, steps)).toStrictEqual(expectedResult);
    });

    it("should throw an 'invalid line value' error when given a line is less than 1 ", () => {
        let board = [
            [".", ".", ".", "x", ".", "y"],
            [".", "x", ".", ".", ".", "y"],
        ];
        let player = "player1";
        let line = -1;
        let steps = 1;
        expect(() => nextMovement(board, player, line, steps)).toThrow("invalid line value");
    });
    it("should throw an 'invalid line value' error when given a line is greater than the lines in the board ", () => {
        let board = [
            [".", ".", ".", "x", ".", "y"],
            [".", "x", ".", ".", ".", "y"],
        ];
        let player = "player1";
        let line = 50;
        let steps = 1;
        expect(() => nextMovement(board, player, line, steps)).toThrow("invalid line value");
    });
});

