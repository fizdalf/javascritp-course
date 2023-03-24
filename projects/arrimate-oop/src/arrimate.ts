import {createBoard} from "./createBoard";
import {Board} from './Board';
import {BoardPrinter} from './BoardPrinter';
import {ConsoleBoardPrinter} from './ConsoleBoardPrinter';

(async () => {
    const inquirer: any = await import('inquirer');

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
            printBoard(new ConsoleBoardPrinter(), board);
            let steps = await getSteps(player, lineNumber, board);
            board = board.nextMovement(player, lineNumber, steps);
            console.clear();
            printBoard(new ConsoleBoardPrinter(), board);
            if (!board.canMoveInLine(lineNumber)) {
                lineNumber++;
            }
            player = player === 'player1' ? 'player2' : 'player1';
        } while (lineNumber <= dimension)
        console.log(`Player ${player === 'player1' ? "x" : 'y'} has lost!`);
    }

    function printBoard(boardPrinter: BoardPrinter, board: Board) {
        console.log(boardPrinter.print(board));
    }

    main();
})().catch(err => console.error(err))




