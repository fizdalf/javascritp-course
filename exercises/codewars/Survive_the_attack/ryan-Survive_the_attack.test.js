const surviveTheAttack = require('./ryan-Survive_The_Attack');

describe(`surviveTheAttack`, () => {
    it('should return "true" when given "[] []"', () => {
        expect(surviveTheAttack([], [])).toBe("true");
    });
    it('should return "false" when given "[1] [1]"', () => {
        expect(surviveTheAttack([1], [1])).toBe("false");
    });
})
