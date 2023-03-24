import {Monkey} from './Monkey';
import {Platypus} from './Platypus';
import {Snake} from './Snake';


const monkey = new Monkey();
const platypus = new Platypus();
const snake = new Snake();

platypus.poison(monkey);
snake.poison(platypus);

