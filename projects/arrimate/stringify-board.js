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
    let header = getHeader(board[0].length);
    let spacing = getSpacing(board[0].length);
    let line = getLine(board);
    return header + spacing + line + spacing;
}

module.exports = stringifyBoard;
