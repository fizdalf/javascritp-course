import {bmi} from "./bmi";

describe('bmi', function () {
    it('should return "Underweight" if bmi <= 18.5', function () {
        expect(bmi(20, 1.8)).toBe('Underweight');
    });
    it('should return "Normal" if bmi <= 25', function () {
        expect(bmi(60, 1.8)).toBe('Normal');
    });
});