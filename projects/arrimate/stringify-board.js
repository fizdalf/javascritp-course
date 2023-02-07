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
function getLine(board) {
    let line = leftStick + board[0][0] + rightStick + lineNumber + "\n";
    if (board[0].length > 1) {
        line = leftStick + board[0][0];
        for (let i = 1; i < board[0].length; i++) {
            line += middleStick + board[0][i];
            if (i === board[0].length - 1) {
                line = line + rightStick + lineNumber + "\n";
            }
        }
    }return line;
}



function stringifyBoard(board) {

    let header = getHeader(board[0].length);
    let spacing = getSpacing(board[0].length);
     let line = getLine(board);
    return header + spacing + line + spacing;

}

module.exports = stringifyBoard;
