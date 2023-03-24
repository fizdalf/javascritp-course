interface CanMakeNoise {
    makeNoise: () => void;
}

interface CanDie {
    die: () => void;
}

export class Animal implements CanMakeNoise, CanDie {
    protected _name: any;

    die() {
        console.log(`this ${this._name} is dead`);
    }

    makeNoise() {
        console.log("this animal makes noise");
    }

    get name() {
        return this._name
    }
}
