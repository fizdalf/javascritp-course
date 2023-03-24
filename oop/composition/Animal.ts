interface CanMakeNoise {
    makeNoise: () => void;
}

interface CanDie {
    die: () => void;
}

export class Animal implements CanMakeNoise, CanDie {
    protected _name: any;
    cells: any;
    private _lifePoints = 50;

    die() {
        this.makeItDead();
        console.log(`this ${this._name} is dead`);
    }

    makeNoise() {
        console.log("this animal makes noise");
    }

    private makeItDead() {
        this._lifePoints = 0;
    }

    protected yawn() {
        console.log("this animal yawns");
    }

    get name() {
        return this._name
    }

    set name(newName: string) {
        this._name = `unsafe ${newName}`;
    }

    getName() {
        return this._name;
    }
}
