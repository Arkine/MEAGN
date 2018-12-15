const GraphQLString = require('graphql').GraphQLString;
const mongoose = require('mongoose');

const UserAuth = require('../types/user').UserAuth;

module.exports = {
    renewToken: {
        type: UserAuth,
        resolver:  (_, args, context, info) => {
            return null;
        }
    }
}