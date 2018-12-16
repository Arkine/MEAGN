const UserAuth = require('../types/user').UserAuth;
const UserSignupInput = require('../types/user').UserSignupInput;
const UserLogin = require('../types/user').UserLogin;

module.exports = {
    signup: {
        type: UserSignupInput,
        resolver: (_, args, context, info) => {
            console.log('user signup mutation', {...arguments});
            return null;
        }
    },
    login: {
        type: UserLogin,
        resolver: (_, args, context, info) => {
            console.log('user signup mutation', {...arguments});
            return null;
        }
    },
    renewToken: {
        type: UserAuth,
        resolver:  (_, args, context, info) => {
            return null;
        }
    }
}