import inquirer from 'inquirer';
import {stringifyBoard} from "./stringify-board.js";

const main = async () => {
    let selectedOption = null;
    do {
        const answer = await inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'options',
                    message: 'Please select one of the options',
                    choices: [
                        {
                            name: 'Print Board',
                            value: 'printBoard',
                        },
                        {
                            name: 'Exit',
                            value: 'exit',
                        },
                    ],
                },
            ]);
        selectedOption = answer.options

        // TODO: create a function stringifyBoard(board) that will print the table to the console with the following structure
        //  | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
        //  +---+---+---+---+---+---+---+
        //  | . | X | . | . | Y | . | . | <- 1
        //  +---+---+---+---+---+---+---+
        //  | X | . | . | . | . | . | Y | <- 2
        //  +---+---+---+---+---+---+---+
        //  | X | . | . | . | . | . | Y | <- 3
        //  +---+---+---+---+---+---+---+
        //  Use the function to show the board when the user selects the "Print Board" option
        //  Use TDD to create the function that will return a STRING representation of the board, this function will be used
        //  by printBoard to print the board to the console
        const exampleBoard = [
            [".", "X", ".", ".", "Y", ".", "."],
            ["X", ".", ".", ".", ".", ".", "Y"],
            ["X", ".", ".", ".", ".", ".", "Y"],
        ]
        printBoard(exampleBoard) // this function prints the board.
    } while (selectedOption !== 'exit');
}

function printBoard(board) {
    console.log(stringifyBoard(board));
}

main();

// TODO: yo quiero un programa a traves de consola, k me pregunta, de cuanto quiero el tablero?
// // dos numeros separados por comas, min 1X1 sino error message, max 10x10 (k jilipollez) pero error si no cumplen.
// // mostrar tablero en estado inicial. acabar partidas por linias. primero la 1 luego la 2.
// // primero juega x luego y.
// // pedir linia y num de espacios (if not possible error) and try again.
// // diseño en paint xD word... recordar lo de los menus que empezamos en inquirer
// // al final indicar el ganador
//
// // gadgets: poner que si ponen q en segun que sitio exit program.
// // si se piran, end game
