"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createBoard_1 = require("./createBoard");
const ConsoleBoardPrinter_1 = require("./ConsoleBoardPrinter");
(async () => {
    const inquirer = await Promise.resolve().then(() => require('inquirer'));
    async function getDimension() {
        let dimension = null;
        do {
            console.clear();
            const answer = await inquirer.prompt([
                {
                    type: 'number',
                    name: 'dimension',
                    message: 'Please provide the board dimension, it has to be an integer between 3 and 10.',
                }
            ]);
            dimension = answer.dimension;
        } while (isNaN(dimension) || dimension < 3 || dimension > 10);
        return dimension;
    }
    async function getSteps(player, lineNumber, board) {
        let steps;
        do {
            const answer = await inquirer.prompt([
                {
                    type: 'number',
                    name: 'steps',
                    message: `Player ${player === 'player1' ? "x" : 'y'}, how many steps to move in line ${lineNumber}`,
                }
            ]);
            steps = answer.steps;
        } while (isNaN(steps) || !board.isValidMovement(lineNumber, steps));
        return steps;
    }
    const main = async () => {
        let dimension = await getDimension();
        console.clear();
        console.log(`the dimension of the board is ${dimension}x${dimension} `);
        let board = (0, createBoard_1.createBoard)(dimension);
        let lineNumber = 1;
        let player = "player1";
        do {
            printBoard(new ConsoleBoardPrinter_1.ConsoleBoardPrinter(), board);
            let steps = await getSteps(player, lineNumber, board);
            board = board.nextMovement(player, lineNumber, steps);
            console.clear();
            printBoard(new ConsoleBoardPrinter_1.ConsoleBoardPrinter(), board);
            if (!board.canMoveInLine(lineNumber)) {
                lineNumber++;
            }
            player = player === 'player1' ? 'player2' : 'player1';
        } while (lineNumber <= dimension);
        console.log(`Player ${player === 'player1' ? "x" : 'y'} has lost!`);
    };
    function printBoard(boardPrinter, board) {
        console.log(boardPrinter.print(board));
    }
    main();
})().catch(err => console.error(err));
//# sourceMappingURL=arrimate.js.map