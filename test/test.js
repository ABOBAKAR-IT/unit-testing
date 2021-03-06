
var {sum,sendError}=require('../app')

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

it ("sum equal to 89" ,()=>{
  expect(sum(80,9)).toBe(89)
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

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(sum(1,2)).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(sum(2,3)).toBeTruthy();
  expect(z).toBeFalsy();
});


// Numbers
// #

// Most ways of comparing numbers have matcher equivalents.
test('two plus two', () => {
  const value = 2 + 2;
  expect(sum(1,3)).toBeGreaterThan(3);
  expect(sum(2,3)).toBeGreaterThanOrEqual(3.5);
  expect(sum(1,3)).toBeLessThan(5);
  expect(sum(1,0)).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(sum(3,1)).toBe(4);
  expect(sum(2,2)).toEqual(4);
  expect(sum(2,3)).toEqual(expect.any(Number))
  expect(sum(0,.2)).toBeCloseTo(0.2); 
});


// Strings
// #

// You can check strings against regular expressions with toMatch:

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
  expect("rana").toEqual(expect.any(String))
  expect("rana").toEqual("rana")
  
});


// Arrays and iterables#

// You can check if an array or iterable contains a particular item using toContain:
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
  expect(shoppingList).toEqual(expect.any(Array))
});


// Exceptions#

// If you want to test whether a particular function throws an error when it's called, use toThrow.

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {

   expect(() => sendError('you are using the wrong code')).toThrow(Error);
   expect(() => sendError('you are using the wrong code')).toThrow(Error);

  // You can also use the exact error message or a regexp
   expect(() => sendError('you are using the wrong code')).toThrow('you are using the wrong code');
  expect(() => sendError('you are using the wrong code')).toThrow(/code/);
});


