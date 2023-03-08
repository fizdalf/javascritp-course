const timeCorect=require('./correct-the-time-string.js')


describe('timeCorrect',()=>{
    it('should return the same time 09:10:01',()=>{
      expect(timeCorect("09:10:01")).toStrictEqual(`09:10:01`)
    });
    it('should return the same time 01:20:60',()=>{
        expect(timeCorect("01:20:60")).toStrictEqual(`01:20:60`)
    });
    it('should return the same time 02:30:50',()=>{
        expect(timeCorect("12:30:50")).toStrictEqual("12:30:50")
    });
    it('should return the same time 05:70:50',()=>{
        expect(timeCorect("05:70:50")).toStrictEqual("06:10:50")
    });
})