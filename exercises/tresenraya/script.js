const board = document.getElementById('board');
const resetButton = document.getElementById('reset');
const cells = document.querySelectorAll('.cell');
const player1 = 'X';
const player2 = 'O';
let currentPlayer = player1;

// Agregar un evento de clic a cada celda
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        // Si la celda ya está ocupada, no hacer nada
        if (cell.textContent !== '') {
            return;
        }

        // Agregar el símbolo del jugador actual a la celda
        cell.textContent = currentPlayer;

        // Comprobar si el jugador actual ha ganado
        if (hasWon(currentPlayer)) {
            alert(`¡${currentPlayer} ha ganado!`);
            reset();
            return;
        }

        // Comprobar si hay empate
        if (isTie()) {
            alert('¡Empate!');
            reset();
            return;
        }

        // Cambiar el turno del jugador
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    });
});

// Comprobar si el jugador dado ha ganado
function hasWon(player) {
    const winningCombos = [
        // Filas
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Columnas
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonales
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombos.some(combo => {
        return combo.every(index => {
            return cells[index].textContent === player;
        });
    });
}

// Comprobar si hay empate
function isTie() {
    return [...cells].every(cell => {
        return cell.textContent !== '';
    });
}

// Reiniciar el juego
function reset() {
    cells.forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = player1;
}

// Agregar un evento de clic al botón de reinicio
resetButton.addEventListener('click', reset);
