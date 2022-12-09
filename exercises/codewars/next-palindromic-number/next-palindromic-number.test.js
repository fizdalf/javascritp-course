const nextPal = require('./next-palindromic-number');

describe('nextPal', () => {
    it.each([
        {given: 11, expected: 22},
        {given: 12, expected: 22},
        {given: 22, expected: 33},
        {given: 23, expected: 33},
        {given: 24, expected: 33},
        {given: 32, expected: 33},
        {given: 33, expected: 44},
        {given: 43, expected: 44},
        {given: 44, expected: 55},
        {given: 54, expected: 55},
        {given: 188, expected: 191},
        {given: 191, expected: 202},
        {given: 2541, expected: 2552},
    ])('should return $expected when given $given', ({given, expected}) => {
        expect(nextPal(given)).toBe(expected);
    });
});
