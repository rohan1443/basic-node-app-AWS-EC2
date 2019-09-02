var request = require('supertest')
var app = require('../index')

describe("GET / testing", () => {
  it("responds with a hello world", (done) => {

    //navigating to the root and checking the response
    request(app).get('/').expect('Hello Rohan', done)
  })
})