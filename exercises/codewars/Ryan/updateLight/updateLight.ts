export function updateLight(current: string) :string {
   const one = 'green';
   const two = 'yellow';
   const three = 'red';

    if (current === one) {
        return two;
    }
    if (current === two) {
        return three;
    }
   if (current === three) {
       return one;
   }
   return 'wrong';
}
