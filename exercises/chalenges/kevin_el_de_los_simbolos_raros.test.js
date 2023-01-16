const identificador=require('./kevin_el_de_los_simbolos_raros');
describe('identificador',()=>{
    it('Si le damos uns simbolo nos devuleve otro',()=>{
        expect(identificador('<')).toBe('&lt')
        expect(identificador('>')).toBe('&gt')
        expect(identificador('"')).toBe('&quot')
        expect(identificador('&')).toBe('&amp')



    });
});