// next movement, recibe lo siguientes parámetros (board, player, line, moves), debe indicar si la jugada es válida o
// no, lanzando un error en caso que no sea válida, y devolviendo el tablero modificado en caso de que lo sea
const nextMovement = require("./next-movement");

describe('nextMovement', function () {
    it('si en un tablero de 1x2 la x se mueve 3 an error is thrown', () => {
        let board = [["x", "y"]];
        let player = "player1";
        let line = 1;
        let moves = 1;
        expect(() => nextMovement(board, player, line, moves)).toThrow("invalid movement");
    });
    it('si en un tablero de 1x3 la x se mueve 1 it should return the modified board', () => {
        let board = [["x", ".", "y"]];
        let player = "player1";
        let line = 1;
        let moves = 1;
        expect(nextMovement(board, player, line, moves)).toStrictEqual([[".", "x", "y"]]);
    });
    it('si en un tablero de 1x4 la x se mueve 1 it should return the modified board', () => {
        let board = [["x", ".", ".", "y"]];
        let player = "player1";
        let line = 1;
        let moves = 1;
        expect(nextMovement(board, player, line, moves)).toStrictEqual([[".", "x", ".", "y"]]);
    });
    it('si en un tablero de 1x5 la x se mueve 1 it should return the modified board', () => {
        let board = [["x", ".", ".", ".", "y"]];
        let player = "player1";
        let line = 1;
        let moves = 1;
        expect(nextMovement(board, player, line, moves)).toStrictEqual([[".", "x", ".", ".", "y"]]);
    });

    it('si en un tablero de 1x6 la x se mueve 1 it should return the modified board', () => {
        let board = [[".", "x", ".", ".", ".", "y"]];
        let player = "player1";
        let line = 1;
        let moves = 1;
        expect(nextMovement(board, player, line, moves)).toStrictEqual([[".", ".", "x", ".", ".", "y"]]);
    });

    it('si en un tablero de 1x6 la x se mueve 1 it should return the modified board', () => {
        let board = [[".", ".", "x", ".", ".", "y"]];
        let player = "player1";
        let line = 1;
        let moves = 1;
        expect(nextMovement(board, player, line, moves)).toStrictEqual([[".", ".", ".", "x", ".", "y"]]);
    });
    it('si en un tablero de 1x6 la x se mueve 1 it should return the modified board', () => {
        let board = [[".", ".", ".", "x", ".", "y"]];
        let player = "player1";
        let line = 1;
        let moves = 1;
        expect(nextMovement(board, player, line, moves)).toStrictEqual([[".", ".", ".", ".", "x", "y"]]);
    });
});
