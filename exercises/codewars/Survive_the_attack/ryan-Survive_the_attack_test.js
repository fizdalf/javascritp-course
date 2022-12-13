const surviveTheAttack = require('./ryan-Survive_The_Attack');
const highAndLow = require("../highest_and_lowest/highest_and_lowest");

describe(`surviveTheAttack`, () => {
    it('should return "false" when given "[] []"', () => {
        expect(surviveTheAttack("[] []")).toBe("false");
    });
})
