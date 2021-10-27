const request = require('supertest');
const app = require('../server');

it('should create a new post', async () => {
    const res = await request(app)
      .get('/data')
      .send({
        userId: 1,
        title: 'test is cool',
      })
    expect(res.statusCode).toEqual(201)
   // expect(res.body).toEqual(expect.any(Object))
  })