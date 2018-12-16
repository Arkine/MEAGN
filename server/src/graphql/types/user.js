const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLString = require('graphql').GraphQLString;
const GraphQLInt = require('graphql').GraphQLInt;

module.exports = {
	User: new GraphQLObjectType({
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
	}),
	UserAuth: new GraphQLObjectType({
		name: 'AuthInput',
		description: 'User auth',
		fields: {
			token: {
				type: GraphQLString
			}
		}
	}),
	UserSignupInput: new GraphQLObjectType({
		name: 'userSignupInput',
		description: 'Sign up a user',
		fields: {
			email: {
				type: GraphQLString
			},
			password: {
				type: GraphQLString
			}
		}
	})
}
