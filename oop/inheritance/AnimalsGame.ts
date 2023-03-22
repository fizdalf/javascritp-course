import {Monkey} from './Monkey';
import {Platypus} from './Platypus';


const monkey = new Monkey();
const platypus = new Platypus();

platypus.poison(monkey);

monkey.poison(platypus);
