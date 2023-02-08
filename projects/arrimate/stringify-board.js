let leftStick = "| ";
let separator = "+---+"; // separator + separator -> +---+
let continueSeparator = "---+";
let lineNumber = " <- 1";
let rightStick = " |";
let middleStick = " | ";
let reverseArrow = " <- ";


function getHeader(elements) {
    return '|' + (Array.from(Array(elements).keys())).map(x => ` ${x + 1} `).join('|') + '|' + "\n";
}

function getSpacing(elements) {
    return "+" + (new Array(elements)).fill('---').join('+') + "+" + "\n";
}

function getLine(board) {
    return '|' + board[0].map(x => ` ${x} `).join('|') + '|' + " <- 1" + '\n';
}


function stringifyBoard(board) {
function getLine(board) {
    let line = leftStick + board[0][0];
    for (let i = 1; i < board[0].length; i++) {
        line += middleStick + board[0][i];
    }
    return line + rightStick + " <- 1" + "\n";
}

function getLine2(board) {
    let line = leftStick + board[1][0];
    for (let i = 1; i < board[1].length; i++) {
        line += middleStick + board[1][i];
    }
    return line + rightStick + " <- 2" + "\n";
}

/*function getLineNumber(board) {
    let lineNumber = reverseArrow + board.length;
    for (let i = 1; i < board.length -1; i++) {
        lineNumber = lineNumber + "\n";
    }
    lineNumber = lineNumber + "\n";
    return lineNumber;
}*/

function stringifyBoard(board) {

    let header = getHeader(board[0].length);
    let spacing = getSpacing(board[0].length);
    let line = getLine(board);
    let line2 = getLine2(board);
    if (board.length === 1) {
        return header + spacing + line + spacing;
}
    return leftStick + 1 + rightStick + "\n" + spacing + line + spacing + line2 + spacing;
}

module.exports = stringifyBoard;
