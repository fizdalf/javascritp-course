export function bmi(wight: number, height: number):string {
   let bmiX = wight/(height*height);
    if (bmiX <= 25 && bmiX > 18.5) {
       return 'Normal';
   }

    return 'Underweight';
}