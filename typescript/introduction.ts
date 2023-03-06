const myVar: string = "test";
let myVar2: object = undefined// [], null;

// string, object, number, boolean, function...

const arrayOfStuff: string[] = ["hola", 1, true, () => {
}, null, undefined, {}, []]

arrayOfStuff.push(50);

function test(name: string): number {
    return Number.parseInt(name);
}

const myPersonalObject: { lastName: string; name: string; age: number } = {
    lastName: "Juanito",
    name: "Joselito",
    age: 1,
};

const stringOrNumberArray: (string|number|object)[] = [
    1,2,3,4,
    "hola", "hola2", "fasdf",
    []
];




