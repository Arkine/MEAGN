const mongoose = require('mongoose');
const GraphQLID = require('graphql').GraphQLID;

const UserAuth = require('../types/user').UserAuth;

module.exports = {
    authUser: {
        type: UserAuth,
        resolve:  (_, args, context, info) => {
            // return null
        }
    }
}
