import inquirer from 'inquirer';
import {createBoard} from "./createBoard.js";
import {Board} from './Board';


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
    } while (isNaN(steps) || !board.isValidMovement(lineNumber, steps));
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
        board = board.nextMovement(player, lineNumber, steps);
        console.clear();
        printBoard(board);
        if (!board.canMoveInLine(lineNumber)) {
            lineNumber++;
        }
        player = player === 'player1' ? 'player2' : 'player1';
    } while (lineNumber <= dimension)
    console.log(`Player ${player === 'player1' ? "x" : 'y'} has lost!`);
}

function printBoard(board: Board) {
    console.log(board.stringifyBoard());
}

main();

