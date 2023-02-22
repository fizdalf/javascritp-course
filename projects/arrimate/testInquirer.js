import inquirer from 'inquirer';
import {stringifyBoard} from "./stringify-board.js";
import {createBoard} from "./createBoard.js";
import {nextMovement} from "./next-movement.js";

const main = async () => {
    let selectedOption = null;
    do {

        let dimension = null;
        do {
            console.clear()
            const answer = await inquirer.prompt([
                {
                    type: 'number',
                    name: 'dimension',
                    message: 'Please provide the board dimension, it has to be an integer between 3 and 10.',
                }
            ]);
            dimension = answer.dimension;
        } while (isNaN(dimension) || dimension < 3 || dimension > 10);
        console.clear();
        console.log(`the dimension of the board is ${dimension}x${dimension} `);

        const board = createBoard(dimension);

        printBoard(board);

       // TODO: conseguir que el tablero no se borre y que el jugador pueda decir su jugada. 


        selectedOption = "exit";

    } while (selectedOption !== 'exit');
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


