const countDots = require('./countDots.js');
let dotsAfterX = 0;
function canMoveInLine(board, line) {
      if (countDots( dotsAfterX >= 1)) {
              return "true";
      }
      return "false";
}

module.exports = canMoveInLine;
