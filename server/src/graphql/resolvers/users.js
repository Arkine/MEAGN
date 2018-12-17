const UserAuth = require('../types/user').UserAuth;

module.exports = {
    authUser: {
        type: UserAuth,
        description: 'Auth up a user',
        resolve:  (_, args, context, info) => {
            // return null
        }
    }
}
