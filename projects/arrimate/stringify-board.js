let leftStick = "| ";
let separator = "+---+"; // separator + separator -> +---+
let continueSeparator = "---+";
let lineNumber = " <- 1";
let rightStick = " |";
let middleStick = " | ";
let reverseArrow = " <- ";


function getHeader(elements) {
    let header = leftStick + 1;
    for (let i = 2; i <= elements; i++) {
        header = header + middleStick + i;
    }
    header = header + rightStick + "\n";
    return header;
}

function getSpacing(elements) {
    let spacing = separator;
    for (let i = 2; i <= elements; i++) {
        spacing += continueSeparator;
    }
    return spacing + "\n";
}

function getLine(board) {
    let line = leftStick + board[0][0];
    for (let i = 1; i < board[0].length; i++) {
        line += middleStick + board[0][i];
    }
    return line + rightStick + lineNumber + "\n" + getLine2(board[1]);
}

function getLine2(board) {
    if (board.length > 1) {
    let line = leftStick + board[1][0];
    for (let i = 1; i < board[1].length; i++) {
        line += middleStick + board[1][i];
    }
    return line + rightStick + lineNumber + "\n";
}
}

function getLine3(board) {

}

/*function getLineNumber(board) {
    let lineNumber = reverseArrow + board.length;
    for (let i = 1; i < board.length; i++) {
        lineNumber = lineNumber + "\n";
    }
    lineNumber = lineNumber + "\n";
    return lineNumber;
}*/

function stringifyBoard(board) {

    let header = getHeader(board[0].length);
    let spacing = getSpacing(board[0].length);
    let line = getLine(board);

    return header + spacing + line + spacing;

}


module.exports = stringifyBoard;
