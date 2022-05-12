import { render, screen } from '@testing-library/react';
describe("this is second suite", ()=>{
    it("second suit first test", ()=>{
        var text = "this is second suit"
        expect(text).toContain('this is second suit')
    })
})