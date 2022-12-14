module.exports = nextMovement;

function nextMovement(board, player, line, moves) {
    if (board.length === 1 && board[0].length === 3) {
        return [[".", "x", "y"]];
    }
    if (board.length === 1 && board[0].length === 4) {
        return [[".", "x", ".", "y"]];
    }
    throw "invalid movement";
}
