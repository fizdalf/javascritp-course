import {Animal} from './Animal';
import {Poisonous} from './Poisonous';
import {EmpoisonementProcess} from './EmpoisonementProcess';

export class Platypus extends Animal implements Poisonous {
    _name = "platypus";

    private _empoisonementProcess: EmpoisonementProcess;

    constructor(empoisonementProcess: EmpoisonementProcess) {
        super();
        this._empoisonementProcess = empoisonementProcess;
    }

    poison(otherAnimal: Animal) {
        this._empoisonementProcess.poison(this, otherAnimal);
    }
}
