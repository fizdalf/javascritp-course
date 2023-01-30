const countDots = require('./countDots.js');

function canMoveInLine(board, lineNumber) {
    const result = countDots(board[lineNumber - 1]);
    return result.dotsBetween > 0;
}

module.exports = canMoveInLine;
