const surviveTheAttack = require('./ryan-Survive_The_Attack');
const nextPal = require("../next-palindromic-number/next-palindromic-number");

describe(`surviveTheAttack`, () => {
    it.each([
        {given: [], expected: true},
    ])(`should return $expected when given $given`, ({given, expected}) => {
        expect(nextPal(given)).toBe(expected);
    })
})
