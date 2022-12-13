const surviveTheAttack = require('./ryan-Survive_The_Attack');

describe(`surviveTheAttack`, () => {
    it.each([
        {given: [], expected: true},
    ])(`should return $expected when given $given`, ({given, expected}) => {
        expect(nextPal(given)).toBe(expected);
    })
})
