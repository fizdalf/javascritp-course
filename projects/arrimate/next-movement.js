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
            let dotsBeforeX =  giveMeDots(2);
            return [[...dotsBeforeX, "x", ".", ".", "y"]]
        }
        if (board[0][2] === 'x') {
            let dotsBeforeX =  giveMeDots(3);
            return [[...dotsBeforeX, "x", ".", "y"]]
        }
        if (board[0][3] === 'x') {
            let dotsAfterX=giveMeDots(0)
            let dotsBeforeX =  giveMeDots(4);
            return [[...dotsBeforeX, "x", ...dotsAfterX, "y"]]
        }
        let numberOfDotsWeNeed = board[0].length - 3;
        let dots = giveMeDots(numberOfDotsWeNeed);
        let dotsBeforeX = giveMeDots(1);
        return [[...dotsBeforeX, "x", ...dots, "y"]];
    }
    throw "invalid movement";
}
