const toCamelCase = require("./ryan-convertStringToCamelCase");

describe('toCamelCase', (str) => {
    it.each([
        {given: `a`, expected: `a`},
    ])('should return $expected when given $given', ({given, expected}) => {
        expect(toCamelCase(given)).toBe(expected);
    });
});
