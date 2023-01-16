const nextPal=require('./numbers_palindrome');

describe('nextPal',()=>{
     it('Deberia debolver el numero al reves',()=> {
        expect(nextPal(12345)).toBe(54321)
         expect(nextPal(1)).toBe(1)
         expect(nextPal(12)).toBe(21)
         expect(nextPal(1)).toBe(1)


     });

});