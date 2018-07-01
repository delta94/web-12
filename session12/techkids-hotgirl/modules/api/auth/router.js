const express = require('express');
const Router = express.Router();
const AuthController = require('./controller');

Router.post('/', (req, res) => {
    AuthController.login(req.body)
        .then(userInfo => {
            req.session.user = userInfo;
            res.send({ success: 1, user: userInfo });
        })
        .catch(err => res.status(err.statusCode ? err.statusCode : 500).send({success: 0, err: err.errMsg}));
})

module.exports = Router