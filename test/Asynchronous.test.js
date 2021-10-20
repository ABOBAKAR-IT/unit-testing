const { fetchData } = require("../app");

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
