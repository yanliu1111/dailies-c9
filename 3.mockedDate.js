const someFunctions = require('../library/someFunctions')

describe('some functions', ()=>{
    describe('live date', () =>{
        it('should return a date close to now', ()=>{
            const date = someFunctions.date()
            expect(Date.now()-date).toBeLessThan(100)
        })
    })

    describe('mocked date', ()=>{
        var realDateNow
        var realNow = Date.now()
        beforeEach(()=>{
            realDateNow = Date.now.bind(global.Date);
            const dateNowStub = jest.fn(()=>new Date(1981, 5, 12, 12, 4 ))
            global.Date.now = dateNowStub
        })
        afterEach(()=>{
            global.Date.now = realDateNow
        })
        it('should be close to first shuttle launch time', ()=>{
            const dateOfLaunch = someFunctions.date()

            // almost 40 years ago!
            expect(realNow-dateOfLaunch).toBeGreaterThan(39 * 365 * 24 * 60 * 60 * 1000 )
        })
    })
})