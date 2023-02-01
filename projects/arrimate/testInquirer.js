import inquirer from 'inquirer';

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

main();
