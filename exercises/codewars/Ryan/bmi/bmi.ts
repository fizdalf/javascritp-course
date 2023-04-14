export function bmi(wight: number, height: number):string {
   let bmiX = wight/(height*height);
    if (bmiX <= 30 && bmiX > 25) {
        return 'Overweight';
    }
   if (bmiX <= 25 && bmiX > 18.5) {
       return 'Normal';
   }

    return 'Underweight';
}