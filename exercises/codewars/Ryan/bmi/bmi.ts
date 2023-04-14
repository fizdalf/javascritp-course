export function bmi(weight: number, height: number): string {
    const bmiX = weight / (height * height);
    return bmiX <= 18.5 ? 'Underweight' : bmiX <= 25.0 ? 'Normal' : bmiX <= 30.0 ? 'Overweight' : 'Obese';
};
