//callback 
const { fetchData ,promis} = require("../app");

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