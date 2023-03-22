import {Animal} from './Animal';
import {Poisonous} from './Poisonous';
import {EmpoisonementProcess} from './EmpoisonementProcess';

export class Snake extends Animal implements Poisonous {
    _name: string = "Snake";
    private _empoisonementProcess: EmpoisonementProcess;

    constructor() {
        super();
        this._empoisonementProcess = new EmpoisonementProcess();
    }

    poison(otherAnimal: Animal) {

        this._empoisonementProcess.poison(this, otherAnimal);
    }

}
