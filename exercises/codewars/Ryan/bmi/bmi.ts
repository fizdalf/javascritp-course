export function bmi(wight: number, height: number): string {
    let bmiX = wight / (height * height);
    if (bmiX > 30) {
        return 'Obese';
    }
    if (bmiX <= 30 && bmiX > 25) {
        return 'Overweight';
    }
    if (bmiX <= 25 && bmiX > 18.5) {
        return 'Normal';
    }
    if (bmiX < 18.5) {
        return 'Underweight';
    }
    throw new Error("The method or operation is not implemented.");
}