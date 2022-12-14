module.exports = nextMovement;

function nextMovement(board, player, line, moves) {
    if (board.length === 1) {
        if (board[0].length === 3) {
            const dots = [];
            return [[".", "x", ...dots, "y"]];
        }
        if (board[0].length === 4) {
            const dots = ["."];
            return [[".", "x", ...dots, "y"]];
        }

        if (board[0].length === 5) {
            const dots = [".", "."];
            return [[".", "x", ...dots, "y"]];
        }
    }
    throw "invalid movement";
}
