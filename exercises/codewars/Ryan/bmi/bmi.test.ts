import {bmi} from "./bmi";

describe('bmi', function () {
    it('should return "Underweight" if bmi <= 18.5', function () {
        expect(bmi(60, 1.8)).toBe('Underweight');
    });
});