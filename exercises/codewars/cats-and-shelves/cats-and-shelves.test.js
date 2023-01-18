const solution = require("./cats-and-shelves");

describe("solution", () => {
    it("when the cat starts at one and finishes at two, there is a minimum of one jumps", () => {
        expect(solution(1, 2)).toBe(1);
    });
    it("when the cat starts at one and finishes at three, there is a minimum of two jumps", () => {
        expect(solution(1, 3)).toBe(2);
    });
    it("when the cat starts at one and finishes at four, there is a minimum of one jump", () => {
        expect(solution(1, 4)).toBe(1);
    });
    it("when the cat starts at one and finishes at five, there is a minimum of two jumps", () => {
        expect(solution(1, 5)).toBe(2);
    });
    it("when the cat starts at one and finishes at six, there is a minimum of three jumps", () => {
        expect(solution(1, 6)).toBe(3);
    });
    it("when the cat starts at one and finishes at seven, there is a minimum of three jumps", () => {
        expect(solution(1, 7)).toBe(2);
    });
    it("when the cat starts at one and finishes at eight, there is a minimum of three jumps", () => {
        expect(solution(1, 8)).toBe(3);
    });
    it("when the cat starts at one and finishes at ten, there is a minimum of three jumps", () => {
        expect(solution(1, 10)).toBe(3);
    });
    it("when the cat starts at two and finishes at three, there is a minimum of one jump", () => {
        expect(solution(2, 3)).toBe(1);
    });
    it("when the cat starts at one and finishes at twelve, there is a minimum of 4 jumps", () => {
        expect(solution(1, 12)).toBe(5);
    });
    it("when the cat starts at one and finishes at thirteen, there is a minimum of 4 jumps", () => {
        expect(solution(1, 13)).toBe(4);
    });
    it("when the cat starts at one and finishes at 14, there is a minimum of 5 jumps", () => {
        expect(solution(1, 14)).toBe(5);
    });
    it("when the cat starts at one and finishes at 15, there is a minimum of 6 jumps", () => {
        expect(solution(1, 15)).toBe(6);
    });
    it("when the cat starts at one and finishes at 16, there is a minimum of 4 jumps", () => {
        expect(solution(1, 16)).toBe(5);
    });
    it("when the cat starts at one and finishes at 17, there is a minimum of 5 jumps", () => {
        expect(solution(1, 17)).toBe(6);
    });
    it("when the cat starts at one and finishes at 9, there is a minimum of 4 jumps", () => {
        expect(solution(1, 9)).toBe(4);
    });
    it("when the cat starts at one and finishes at 11, there is a minimum of 4 jumps", () => {
        expect(solution(1, 11)).toBe(4);
    });
})
