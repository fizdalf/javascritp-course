import {Animal} from './Animal';

export class EmpoisonementProcess {
    poison(poisonousAnimal: Animal, otherAnimal: Animal) {
        console.log(`${poisonousAnimal.name} has poisoned ${otherAnimal.name}!`);
        otherAnimal.die();
    }
}
