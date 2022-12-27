module.exports = nextMovement;

function giveMeDots(numberOfDotsWeNeed) {
    let dots = [];

    while (dots.length < numberOfDotsWeNeed) {
        dots.push(".");
    }
    return dots;
}

function nextMovement(board, player, line, moves) {
    if (board[0].length > 2) {

        if (board[0][1] === 'x') {
            return [[".", ".", "x", ".", ".", "y"]]
        }
        if (board[0][2] === 'x') {
            return [[".", ".", ".", "x", ".", "y"]]
        }
        if (board[0][3] === 'x') {
            return [[".", ".", ".", ".", "x", "y"]]
        }
        let numberOfDotsWeNeed = board[0].length - 3;
        let dots = giveMeDots(numberOfDotsWeNeed);
        return [[".", "x", ...dots, "y"]];
    }
    throw "invalid movement";
}
