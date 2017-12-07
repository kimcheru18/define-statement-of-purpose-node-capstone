// connect to db
// insert seed data into db
// make HTTP requests to API using the test client
// inspect the state of the db after request is made
// tear down the db

// using ES6 promises

const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const mongoose = require('mongoose');

// requiring in the js files from this app
const Statement = require('../models/statement');
//console.log(Statement);
const User = require('../models/user');
//console.log(User);
const {
    app,
    runServer,
    closeServer
} = require('../server');
// import TEST_DATABASE_URL from ('../config');
const {
    DATABASE_URL,
    TEST_DATABASE_URL
} = require('../config');
console.log(TEST_DATABASE_URL);


const should = require('chai').should();
chai.use(chaiHttp);


//function definitions
function seedStatementData() {
    console.info('Seeding statment data')
    const seedData = [];

    //    should this be the "length" or number of statements, not 10?
    for (let i = 1; i <= 10; i++) {
        seedData.push(generateStatementData());
    }
    // console.log(seedData);
    // console.log(Statement);
    // should return a promise
    return Achievement.insertMany(seedData);
}

const testUsername = faker.random.word() + faker.random.number();


function generateUserData() {
    return {
        username: testUsername,
        password: faker.random.word()
    }
}

//line 49-71 from example capstone. Not sure how to write this







//starting from line 72 below this
describe('Statements API resource', function() {

    before(function() {
        return runServer(TEST_DATABASE_URL)
            .then(console.log('running server'))
            .catch(err => console.log({err}));
    });

    beforeEach(function() {
        return seedStatementData();
    });

    describe('GET endpoint', function() {
        it('should return all statements in the DB for a user', function() {
            let res;
            return chai.request(app)
                .get('/statements/' + testUsername)
                .then(function(_res) {
                res = _res;
                res.should.have.status(200);
                res.body.statementOutput.should.have.length.of.at.least(1);
                return Statement.count();
            })
                .then(function(count) {
                res.body.statementOutput.should.have.length.of(count);
            });
        });
    });

    it('should return statements with the right fields', function() {
        // ensure they have the expected keys
        return chai.request(app)
            .get('/statements/' + testUsername)
            .then(function(res) {
            res.should.have.status(200);
            res.should.be.json;
            res.body.statementOutput.should.be.a('array');
            res.body.statementOutput.should.have.length.of.at.least(1);

            res.body.statementOutput.forEach(function(achievement) {
                statement.should.be.a('object');
                statement.should.include.keys(
                    'user', 'body', 'values', 'beliefs', 'goals');
            });
        });
    });

//above is up to line 117 in example code.
//    next will be POST function




})


const someJsFile = ('/statements');

describe('statements', function () {
    it('should return status 200', function () {
        chai.request(app)
            .get('/statements')
            .then(function (res) {
                res.should.have.status(200);
            });
    });
});
