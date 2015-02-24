var request = require('supertest');
var app = require('../app.js');
 
describe('GET /api', function() {
  it('respond with hello jenkins', function(done) {
    request(app).get('/').expect('hello jenkins', done);
  });
});

describe('GET /api/search', function() {
  it('respond with reached search', function(done) {
    request(app).get('/search').expect('reached search', done);
  });
});