import {Monkey} from './Monkey';
import {Platypus} from './Platypus';
import {Snake} from './Snake';
import {EmpoisonementProcess} from './EmpoisonementProcess';


const monkey = new Monkey();
const platypus = new Platypus(new EmpoisonementProcess());
const snake = new Snake();

monkey.cells = 5;
console.log(monkey.cells);

console.log(monkey.name);
console.log(monkey.getName());

monkey.name = 'ass';
console.log(monkey.name);
console.log(monkey.getName());

platypus.poison(monkey);
snake.poison(platypus);

