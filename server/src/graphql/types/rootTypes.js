const User = require('./user').User;
const UserSignupInput = require('./user').UserSignupInput;
const UserSignupPayload = require('./user').UserSignupPayload;
const UserAuth = require('./user').UserAuth;
const UserLogin = require('./user').UserLogin;
const UserLoginPayload = require('./user').UserLoginPayload;

module.exports = [
    User,
    UserSignupInput,
    UserSignupPayload,
    UserAuth,
    UserLogin,
    UserLoginPayload
];