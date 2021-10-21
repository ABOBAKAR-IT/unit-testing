//callback 
const { fetchData ,promis, sum} = require("../app");

it('the data is peanut butter', done => {
    function callback(data) {
      try {
        expect(data).toBe('rana abobakar');
        done();
      } catch (error) {
        done(error);
      }
    }
  
    fetchData(callback);
  });


  //promises

  it('test promises ', () => {
    return promis().then(data => {
      expect(data).toBe('rana');
    }).catch(data=>{
      expect(data).toBe('grana')
    })
  });


  it('the data is peanut butter', () => {
    return expect(promis()).resolves.toBe('rana')
  });

  //async / await

  it('test promises ',async () => {
   const data=await sum(1,3)
  expect(data).toBe(4)
  });



