const countDots = require('./countDots.js');

function canMoveInLineRemembering(board, lineNumber) {
    const result = countDots(board[lineNumber - 1]);
    return result.dotsBetween > 0;
}

module.exports = canMoveInLineRemembering;