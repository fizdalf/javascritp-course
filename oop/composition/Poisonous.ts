import {Animal} from './Animal';

export interface Poisonous {
    poison(otherAnimal: Animal): void;
}
