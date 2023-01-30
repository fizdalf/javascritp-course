import inquirer from 'inquirer';

inquirer
    .prompt([
        {
            type: 'confirm',
            name: 'toBeDelivered',
            message: 'Is this for delivery?',
            default: false,
        },
    ])
    .then((answers) => {
        console.log(answers);
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log(error)
        } else {
            console.log(error)
        }
    });
