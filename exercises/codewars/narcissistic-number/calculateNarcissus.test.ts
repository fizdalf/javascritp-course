import {calculateNarcissus} from ".";

describe('calculateNarcissus', () => {
    it.each([
        {given: 1, returns: 1},
        {given: 2, returns: 2},
        {given: 3, returns: 3},
        {given: 10, returns: 1},
        {given: 12, returns: 5},
        {given: 15, returns: 26},
        {given: 20, returns: 4},
        {given: 29, returns: 85},
        {given: 50, returns: 25},
    ])("it should return $returns when given $given", ({given, returns}) => {
        expect(calculateNarcissus(given)).toBe(returns);
    });
})
