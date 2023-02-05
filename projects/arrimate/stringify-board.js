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
    if (board[0].length > 1) {
        for (let i = 1; i < board[0].length; i++) {
            line += middleStick + board[0][i];
            if (i === board[0].length - 1) {
                line = line + rightStick + lineNumber + "\n";
            }

        }

    }else{
        line= leftStick + board[0][0] + rightStick + lineNumber + "\n";
    }





    // if (board[0].length >= 2) {
    //     line = leftStick + board[0][0] + middleStick + board[0][1] + rightStick + lineNumber + "\n";
    // }
    // if (board[0].length >= 3) {
    //     line = leftStick + board[0][0] + middleStick + board[0][1] + middleStick + board[0][2] + rightStick + lineNumber + "\n";
    // }
    // if (board[0].length >= 4) {
    //     line = leftStick + board[0][0] + middleStick + board[0][1] + middleStick + board[0][2] + middleStick + board[0][3] + rightStick + lineNumber + "\n";
    // }
    let header = getHeader(board[0].length);
    let spacing = getSpacing(board[0].length);
   // let line = getLine(board[0].length);
    return header + spacing + line + spacing;

}

module.exports = stringifyBoard;
