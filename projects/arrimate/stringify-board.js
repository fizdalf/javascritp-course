let leftStick = "| ";
let separator = "+---+"; // separator + separator -> +---+
let continueSeparator = "---+";
let lineNumber = " <- 1";
let rightStick = " |";
let middleStick = " | ";

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

function stringifyBoard(board) {

    let line = leftStick + board[0][0];
    line = line + rightStick + lineNumber + "\n";

    if (board[0].length >= 2) {
        line = leftStick + board[0][0] + middleStick + board[0][1] + rightStick + lineNumber + "\n";
    }
    if (board[0].length >= 3) {
        line = leftStick + board[0][0] + middleStick + board[0][1] + middleStick + board[0][2] + rightStick + lineNumber + "\n";
    }
    let header = getHeader(board[0].length);
    let spacing = getSpacing(board[0].length);

    return header + spacing + line + spacing;

}

module.exports = stringifyBoard;
