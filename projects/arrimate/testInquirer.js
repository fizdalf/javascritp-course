import inquirer from 'inquirer';
import {stringifyBoard} from "./stringify-board.js";
import {createBoard} from "./createBoard.js";
import {countDots} from "./countDots.js";
import {nextMovement} from "./next-movement.js";
import {canMoveInLine} from "./canMoveInLine.js";

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
    } while (isNaN(dimension) || dimension < 3 || dimension > 10);
    return dimension;
}

async function askStep() {
    return await inquirer.prompt(
        [
            {
                type: 'number',
                name: 'steps',
                message: 'Player X, how many steps to move in line 1',
            }
        ]
    );
}

function isValidMovement(lineNumber, board, steps) {
    let lineIndex = lineNumber - 1;
    const line = board[lineIndex];
    const {dotsBetween} = countDots(line);
    return steps >= 1 && steps <= dotsBetween;
}

async function getSteps(player, lineNumber, board) {
    let steps;
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

    let board = createBoard(dimension);
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

function printBoard(board) {
    console.log(stringifyBoard(board));
}

main();

// TODO: yo quiero un programa a traves de consola, k me pregunta, de cuanto quiero el tablero?
// dos numeros separados por comas, min 1X1 sino error message, max 10x10 (k jilipollez) pero error si no cumplen.
// mostrar tablero en estado inicial. acabar partidas por linias. primero la 1 luego la 2.
// primero juega x luego y.
// pedir linia y num de espacios (if not possible error) and try again.
// diseño en paint xD word... recordar lo de los menus que empezamos en inquirer
// al final indicar el ganador
//
// gadgets: poner que si ponen q en segun que sitio exit program.
// si se piran, end game


