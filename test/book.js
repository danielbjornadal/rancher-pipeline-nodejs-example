'use strict';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../dist/index');
let should = chai.should();

chai.use(chaiHttp);

describe('Books', () => {

	describe('/GET book', () => {
		it('it should GET all the books', (done) => {
			chai.request(server)
				.get('/book')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('array');
					res.body.length.should.not.be.eql(0);
					done();
				});
		});
	});

	describe('/GET bookId', () => {
		it('it should GET bookId 1', (done) => {
			chai.request(server)
				.get('/book/1')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('array');
					res.body.length.should.not.be.eql(0);
					done();
				});
		});
	});

	describe('/GET bookId', () => {
		it('it should GET the empty bookId 10', (done) => {
			chai.request(server)
				.get('/book/10')
				.end((err, res) => {
					res.should.have.status(204);
					// res.body.should.be.a('array');
					// res.body.length.should.be.eql(0);
					done();
				});
		});
	});
});
