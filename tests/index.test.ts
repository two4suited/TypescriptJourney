import {add,multiply} from "../src/index"

describe("test add function", () =>{
    it("should return 2 for 1+1",() =>{
        expect(add(1,1)).toBe(2);
    }),
    it("should return 3 for 1+2",() =>{
        expect(add(1,2)).toBe(3);
    })
})

describe("test multiply function", () =>{
    it("should return 1 when 1*10",() =>{
        expect(multiply(1,10)).toBe(10)
    }),
    it("should be 4 when 2*2", ()=> {
        expect(multiply(2,2)).toBe(4)
    }),
    it("should be 0 when 0*2", ()=> {
        expect(multiply(0,2)).toBe(0)
    })

})