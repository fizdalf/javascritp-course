import inquirer from 'inquirer';
import {stringifyBoard} from "./stringify-board.js";
import {createBoard} from "./createBoard.js";
import {countDots} from "./countDots.js";

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

function isValidMovement(board, steps) {
    const line = board[0];
    const {dotsBetween} = countDots(line);
    console.log(line);
    console.log(dotsBetween)
    return steps >= 1 && steps <= dotsBetween;

}

const main = async () => {
    let dimension = await getDimension();
    // ---- dimension number >= 3 <= 10

    console.clear();
    console.log(`the dimension of the board is ${dimension}x${dimension} `);

    const board = createBoard(dimension);

    printBoard(board);
    let steps;
    do {
        const answer = await askStep();
        steps = answer.steps;

        console.log(steps, isValidMovement(board, steps));
    } while (isNaN(steps) || !isValidMovement(board, steps))


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


