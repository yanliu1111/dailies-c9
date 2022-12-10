describe('fun with before and after', ()=>{
    beforeAll(()=>{
        console.log('before all')
    })
    beforeEach(()=>{
        console.log('before each')
    })
    afterEach(()=>{
        console.log('after each')
    })
    afterAll(()=>{
        console.log('after all')
    })

    it('test1', ()=>{console.log('run test 1')})
    it('test2', ()=>{console.log('run test 2')})
})