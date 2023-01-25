const hasSurvived = require ("./survive_the_attack");

describe ("hasSurvived", () => {
    it ("we don`t survive",() => {
    expect (hasSurvived([12,37,99,95,37,53,55,42,69,52],[81,27,46,95,81,96,67,14,10,47])).toBe(false);
    });
    it ("both has the same survivors and in     itial attack power", () => {
    expect (hasSurvived([],[])).toBe(true)
    });
    it ("defenders has more survivors", () => {
    expect (hasSurvived([1,2,3,4],[2,3,4,5])).toBe(true)
    });
    it ("both team has the same survivors but defenders has higher in   itial attack power", () => {
    expect (hasSurvived([1,2,3,4], [0,1,5,6])).toBe(true)
    });
    it ("defenders has more soldiers, defenders should wins", () => {
    expect (hasSurvived([1,2],[1,2,3])).toBe(true)
    });
    it ("defender loose     it should return false", () => {
    expect (hasSurvived([2, 9, 9, 7], [1, 1, 3, 8])).toBe(false)
    });
    it ("should return true", () => {
    expect (hasSurvived([1, 3, 5, 7], [2, 4, 6, 8])).toBe(true)
    });
    it ("same survivors and same in     itial attack power", () => {
    expect (hasSurvived([10, 10, 1, 1], [4, 4, 7, 7])).toBe(true)
    });
    it ("should return true", () => {
    expect (hasSurvived([], [1, 2, 3])).toBe(true)
    });
    it ("should return false", () => {
    expect (hasSurvived([32, 65, 21, 83, 85, 7, 71, 45, 20, 63], [83, 44, 38, 55, 84, 80, 58, 20, 4, 74])).toBe(false)
    });
    it ("attackers has more soldiers", () => {
    expect (hasSurvived([1, 2, 3], [])).toBe(false)
    });
});