const holaMundo=require('./practica_de_test');

describe('holaMundo',()=>{
    it('Deberia saludar',()=>{
        expect(holaMundo('Mundo')).toBe('Hola Mundo')
    })
})