const toCamelCase = require ("./ryan-convertStringToCamelCase");

describe(`toCamelCase`, function () {
    it(`should be "a" when given "a"`, () => {
        let str = "a";
        expect(() => toCamelCase(str).toThrow("a"));
    });
    it(`should be "B" when given "B"`, () => {
        let str = "B";
        expect(() => toCamelCase(str).toThrow("b"));
    });
});
