import {Board} from './types';

function renderLine(board: Board, line: number): string {
    const index = line - 1;
    return '|' + board[index].map(x => ` ${x} `).join('|') + '|' + " <- " + line + '\n';
}


function getHeader(board: Board): string {
    return '|' + (Array.from(Array(board[0].length).keys())).map(x => ` ${x + 1} `).join('|') + '|' + "\n";
}

function getSpacing(board: Board): string {
    return "+" + (new Array(board[0].length)).fill('---').join('+') + "+" + "\n";
}

export function stringifyBoard(board: Board): string {
    // return getHeader(board) + getSpacing(board) + board.map((line, index) => renderLine(board, index + 1) + getSpacing(board)).join("");
    const header = getHeader(board);
    const spacing = getSpacing(board);
    let table = header + spacing;
    for (let i = 0; i < board.length; i++) {
        const lineNumber = i + 1;
        table = table + renderLine(board, lineNumber) + spacing;
    }
    return table;
}


