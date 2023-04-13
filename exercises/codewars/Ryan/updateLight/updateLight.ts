export function updateLight(current: string) :string {
    if (current === 'yellow') {
        return 'red';
    }
    if (current === 'green') {
        return 'yellow';
    }
   if (current === 'red') {
       return 'green';
   }
   return 'wrong';
}