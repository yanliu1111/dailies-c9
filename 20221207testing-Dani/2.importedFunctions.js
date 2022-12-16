const someFunctions = require('../library/someFunctions')

describe('some functions', ()=>{
    describe('add odd element', () =>{
        it('should return 0 if no odd elements', ()=>{
            const sum = someFunctions.addOddElementsInArray([0,2,4,6])
            expect(sum).toEqual(0)
        })
        it('should sum values of odd elements', ()=>{
            const sum = someFunctions.addOddElementsInArray([2,3,5])
            expect(sum).toEqual(8)
        })
    })
})