const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let questions = ["¿Cómo te llamas?", "¿Cuántos años tienes?", "¿En qué país vives?", "¿Cuál es tu comida favorita?", "¿Qué te gusta hacer en tu tiempo libre?"];

function askQuestion(index) {
    readline.question(questions[index] + ' ', answer => {
        console.log('Tu respuesta a la pregunta ' + (index+1) + ' es: ' + answer);
        if (index < questions.length-1) {
            askQuestion(index+1);
        } else {
            console.log('Fin del programa.');
            readline.close();
        }
    });
}

askQuestion(0);