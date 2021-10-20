var assert = require('assert');
const { test } = require('media-typer');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1, 2, 3].indexOf(2), 11);
//     });
//   });
// });

var {sum}=require('../app')
it("sum to number",()=>{
  expect(sum(1, 2)).toBe(3);
})