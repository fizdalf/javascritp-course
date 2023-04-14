import {bmi} from "./bmi";

describe('bmi', function () {
    it('should return "Underweight" if bmi <= 18.5', function () {
        expect(bmi(20, 1.8)).toBe('Underweight');
    });
    it('should return "Normal" if bmi <= 25', function () {
        expect(bmi(60, 1.8)).toBe('Normal');
    });
    it('should return "Overweight" if bmi <= 30', function () {
        expect(bmi(90, 1.8)).toBe('Overweight');
    });
    it('should return "Obese" if bmi > 30', function () {
        expect(bmi(130, 1.8)).toBe('Obese');
    });
    it('should return "Obese" if bmi > 30 changing height', function () {
        expect(bmi(130, 1)).toBe('Obese');
    });
});