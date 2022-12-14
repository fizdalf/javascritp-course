module.exports = nextMovement;

function nextMovement(board, player, line, moves) {

    if (board[0].length > 2) {
        let dots = [];
        let numberOfDotsWeNeed = board[0].length - 3;

        while (dots.length < numberOfDotsWeNeed) {
            dots.push(".");
        }
        return [[".", "x", ...dots, "y"]];
    }
    throw "invalid movement";
}
