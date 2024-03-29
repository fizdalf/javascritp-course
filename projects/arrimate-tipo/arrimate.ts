import inquirer from 'inquirer';
import {stringifyBoard} from "./stringify-board.js";
import {createBoard} from "./createBoard.js";
import {countDots} from "./countDots.js";
import {nextMovement} from "./next-movement.js";
import {canMoveInLine} from "./canMoveInLine.js";
import {Board} from './types';

async function getDimension() {
    let dimension = null;
    do {
        console.clear();
        const answer = await inquirer.prompt(
            [
                {
                    type: 'number',
                    name: 'dimension',
                    message: 'Please provide the board dimension, it has to be an integer between 3 and 10.',
                }
            ]
        );
        dimension = answer.dimension;
    } while (isNaN(dimension) || dimension < 3 || dimension > 10)
    return dimension;
}



function isValidMovement(lineNumber: number, board: Board, steps: number): boolean {
    let lineIndex = lineNumber - 1;
    const line = board[lineIndex];
    const {dotsBetween} = countDots(line);
    return steps >= 1 && steps <= dotsBetween;
}

async function getSteps(player: string, lineNumber: number, board: Board): Promise<number> {
    let steps: number;
    do {
        const answer = await inquirer.prompt(
            [
                {
                    type: 'number',
                    name: 'steps',
                    message: `Player ${player === 'player1' ? "x" : 'y'}, how many steps to move in line ${lineNumber}`,
                }
            ]
        );
        steps = answer.steps;
    } while (isNaN(steps) || !isValidMovement(lineNumber, board, steps));
    return steps;
}

const main = async () => {
    let dimension = await getDimension();

    console.clear();
    console.log(`the dimension of the board is ${dimension}x${dimension} `);

    let board: Board = createBoard(dimension);
    let lineNumber = 1;
    let player = "player1";

    do {
        printBoard(board);
        let steps = await getSteps(player, lineNumber, board);
        board = nextMovement(board, player, lineNumber, steps);
        console.clear();
        printBoard(board);
        if (!canMoveInLine(board, lineNumber)) {
            lineNumber++;
        }
        player = player === 'player1' ? 'player2' : 'player1';
    } while (lineNumber <= board.length)
    console.log(`Player ${player === 'player1' ? "x" : 'y'} has lost!`);
}

function printBoard(board: Board) {
    console.log(stringifyBoard(board));
}

main();

