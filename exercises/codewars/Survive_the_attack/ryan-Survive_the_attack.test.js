const surviveTheAttack = require('./ryan-Survive_The_Attack');

describe(`surviveTheAttack`, () => {
    it('should return "true" when given "[] []"', () => {
        expect(surviveTheAttack([], [])).toBe("true");
    });
})
