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
    return line + rightStick + lineNumber + "\n";
}
function getLine2() {
    // una funcion que de la linia 2.
    return "\n" + leftStick + "." + rightStick + reverseArrow + 2 + "\n";
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
    let line2 = getLine2()
 if (board.length === 1) {
     return header + spacing + line + spacing;
 }
    return  leftStick + 1 + rightStick + "\n" + spacing + line + line2 + spacing;





}


module.exports = stringifyBoard;
