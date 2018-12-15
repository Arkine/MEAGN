const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLString = require('graphql').GraphQLString;
const GraphQLInt = require('graphql').GraphQLInt;

exports.User = new GraphQLObjectType({
	name: 'User',
	description: 'A Usern',
	fields: {
		name: {
			type: GraphQLString
        },
        username: {
            type: GraphQLString
        },
		avatar: {
			type: GraphQLString
        },
        signedUp: {
            type: GraphQLInt
        },
		error: {
			type: GraphQLString
		}
	}
});

exports.UserAuth = new GraphQLObjectType({
	name: 'AuthInput',
	description: 'User auth',
	fields: {
		token: {
            type: GraphQLString
        }
	}
});
