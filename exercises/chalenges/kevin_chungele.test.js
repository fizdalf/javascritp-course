const comparador=require('./kevin_chungele');
describe('comparador',()=>{
    it('Deveria darme el puto mayor',()=>{
        expect(comparador([2,4,34],[56,45,43])).toBe(144);
    })
});