'use strict';

const User = require('./models/user');
const Statement = require('./models/statement');
const Answer = require('./models/answer');
const bodyParser = require('body-parser');
const config = require('./config');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const morgan = require('morgan');
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(morgan('common'));
app.use(cors());
app.use(express.static('public'));

mongoose.Promise = global.Promise;


// ---------------- RUN/CLOSE SERVER -----------------------------------------------------
let server = undefined;

function runServer(urlToUse) {
    return new Promise((resolve, reject) => {
        mongoose.connect(urlToUse, err => {
            if (err) {
                return reject(err);
            }
            server = app.listen(config.PORT, () => {
                console.log(`Listening on localhost:${config.PORT}`);
                resolve();
            }).on('error', err => {
                mongoose.disconnect();
                reject(err);
            });
        });
    });
}

if (require.main === module) {
    runServer(config.DATABASE_URL).catch(err => console.error(err));
}

function closeServer() {
    return mongoose.disconnect().then(() => new Promise((resolve, reject) => {
        console.log('Closing server');
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    }));
}

// ---------------USER ENDPOINTS-------------------------------------
// POST -----------------------------------
// creating a new user
app.post('/users/create', (req, res) => {
    let username = req.body.username;
    username = username.trim();
    let password = req.body.password;
    password = password.trim();
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return res.status(500).json({
                message: 'Internal server error'
            });
        }

        bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
                return res.status(500).json({
                    message: 'Internal server error'
                });
            }

            User.create({
                username,
                password: hash,
            }, (err, item) => {
                if (err) {
                    return res.status(500).json({
                        message: 'Internal Server Error'
                    });
                }
                if (item) {
                    console.log(`User \`${username}\` created.`);
                    return res.json(item);
                }
            });
        });
    });
});

// signing in a user
app.post('/users/signin', function (req, res) {
    const user = req.body.username;
    const pw = req.body.password;
    User
        .findOne({
            username: req.body.username
        }, function (err, items) {
            if (err) {
                return res.status(500).json({
                    message: "Internal server error"
                });
            }
            if (!items) {
                // bad username
                return res.status(401).json({
                    message: "Not found!"
                });
            } else {
                items.validatePassword(req.body.password, function (err, isValid) {
                    if (err) {
                        console.log('There was an error validating the password.');
                    }
                    if (!isValid) {
                        return res.status(401).json({
                            message: "Not found"
                        });
                    } else {
                        var logInTime = new Date();
                        console.log("User logged in: " + req.body.username + ' at ' + logInTime);
                        return res.json(req.body.username);
                    }
                });
            };
        });
});


// -------------STATEMENT ENDPOINTS------------------------------------------------
//*********************POST*************************
app.post('/statement/create', (req, res) => {

    let user = req.body.user;
    let body = req.body.body;
    let values = req.body.values;
    let beliefs = req.body.beliefs;
    let goals = req.body.goals;

    Statement.create({
        user,
        body,
        values,
        beliefs,
        goals,
    }, (err, item) => {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
            if (item) {
                console.log(`Statement \`${statement}\` added.`);
                return res.json(item);
            }
        }
    });
});




app.post('/answers/create', (req, res) => {

    let user = req.body.user;
    let answer1 = req.body.answer1;
    let answer2 = req.body.answer2;
    let answer3 = req.body.answer3;
    let answer4 = req.body.answer4;
    let answer5 = req.body.answer5;
    let answer6 = req.body.answer6;

    Answer.create({
        user,
        answer1,
        answer2,
        answer3,
        answer4,
        answer5,
        answer6,
    }, (err, item) => {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
            if (item) {
                console.log(`Answer ${item} added.`);
                return res.json(item);
            }
        }
    });
});



//need help on this one save-free-style-sop here
app.post('/statements/create', (req, res) => {

    console.log(req.body.user, req.body.body, req.body.values, req.body.beliefs, req.body.goals);

    Statement.create({
        user: req.body.user,
        body: req.body.body,
        values: req.body.values,
        beliefs: req.body.beliefs,
        goals: req.body.goals
    }, (err, item) => {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
            if (item) {
                console.log(`SaveFreeStyle ${item} added.`);
                return res.json(item);
            }
        }
    });
});





//*********************GET*************************
app.get('/statements/:user', function (req, res) {
    Statement
        .find()
        .sort('statement')
        .then(function (statements) {
            let statementOutput = [];
            statements.map(function (statement) {
                if (statement.user == req.params.user) {
                    statementOutput.push(statement);
                }
            });
            res.json({
                statementOutput
            });
        })
        .catch(function (err) {
            console.error(err);
            res.status(500).json({
                message: 'Internal server error'
            });
        });
});






//*********************PUT*************************
app.put('/statement/:id', function (req, res) {
    let updateSop = {};
    let updateableFields = ['body', 'values', 'beliefs', 'goals'];
    updateableFields.forEach(function (field) {
        if (field in req.body) {
            updateSop[field] = req.body[field];
        }
    });

    Statement
        .findByIdAndUpdate(req.params.id, {
            $set: updateSop
        }).exec().then(function (statement) {
            return res.status(204).end();
        }).catch(function (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        });
});









//*********************DELETE*************************
app.delete('/statements/:id', function (req, res) {
    Statement.findByIdAndRemove(req.params.id).exec().then(function (statement) {
        return res.status(204).end();
    }).catch(function (err) {
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    });
});

//*********************MISC*************************
app.use('*', (req, res) => {
    res.status(404).json({
        message: 'Not Found'
    });
});

exports.app = app;
exports.runServer = runServer;

app.listen(process.env.PORT);
