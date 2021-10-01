const request = require('supertest');
const app = require('./app').app;
const build = require('./app').productBuilder;

// TEST THE REST API ENDPOINT FOR GET
describe('GET requests', () => {
    
    test('GET product/read endpoint, expect 200', async () => {
        const res = await request(app).get('/product/read')
        expect(res.statusCode).toBe(200);
    });

    test('GET bad endpoint, expect 404', async () => {
      const res = await request(app).get('/badEndPoint')
      expect(res.statusCode).toBe(404);
    });

});

// TEST THE REST API ENDPOINT FOR POST
describe('CREATE request', () => {
    
    test('CREATE product test', async () => {
	// TEST IN HERE
    const res = await request(app).post('/product/create')
    send({name : "test name", 

        description : "test desc",

        price : 0});
    expect(res.statusCode).toBe(201)
    });

});


// UNIT TEST THE PRODUCT BUILDER
describe('Unit Tests', () => {

    let obj = {
        name: "name",
        description: "desc",
        price: 15.99
    };
    test('product object builder', () => {
        // TEST IN HERE
        expect(productBuilder("name", "desc", 15.99)).toEqual(obj);
    });

});
