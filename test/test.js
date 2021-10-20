
var {sum}=require('../app')
it("sum to number",()=>{
  expect(sum(1, 2)).toBe(3);
})

it("sum two number and not mach 3",()=>{
  expect(sum(1,3)).not.toBe(2)
})
 
it("sum grater then 0",()=>{
  const result=sum(2,3)
  expect(result).toBeGreaterThan(0)
})