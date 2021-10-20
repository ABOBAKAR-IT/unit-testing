
var {sum}=require('../app')
it("sum to equel to 3",()=>{
  expect(sum(1, 2)).toBe(3);
})

it("sum two number and not mach 3",()=>{
  expect(sum(1,3)).not.toBe(2)
})
 
it("sum grater then 0",()=>{
  const result=sum(2,3)
  expect(result).toBeGreaterThan(0)
})

it("sum is number",()=>{
  expect(sum(1, 2)).toBe(3);
})



// Truthiness #

// In tests, you sometimes need to distinguish between
//  undefined, null, and false, but you sometimes do not want to treat these differently. 
//  Jest contains helpers that let you be explicit about what you want.

// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

