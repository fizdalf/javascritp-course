import {Animal} from './Animal';
import {Poisonous} from './Poisonous';

export class Snake extends Animal implements Poisonous {
    _name: string = "Snake";
    poison(otherAnimal: Animal) {
        console.log(`${this._name} has poisoned ${otherAnimal.name}!`);
        otherAnimal.die();
    }

}
