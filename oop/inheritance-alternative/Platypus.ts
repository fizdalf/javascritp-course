import {Animal} from './Animal';
import {Poisonous} from './Poisonous';

export class Platypus extends Animal implements Poisonous {
    _name = "platypus";

    
    poison(otherAnimal: Animal) {
        console.log(`${this._name} has poisoned ${otherAnimal.name}!`);
        otherAnimal.die();
    }
}
