const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLString = require('graphql').GraphQLString;
const GraphQLInt = require('graphql').GraphQLInt;


const User = exports.User = new GraphQLObjectType({
	name: 'User',
	description: 'A User',
	fields: {
		id	: {
			type: GraphQLString
		},
		name: {
			type: GraphQLString
		},
		email: {
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
	}
});

exports.UserAuth = new GraphQLObjectType({
	name: 'UserAuth',
	description: 'User auth',
	fields: {
		token: {
            type: GraphQLString
        }
	}
});

exports.UserSignupInput = new GraphQLObjectType({
	name: 'userSignupInput',
	description: 'Sign up a user',
	fields: {
		errors: {
			type: GraphQLString
		},
		email: {
			type: GraphQLString
		},
		username: {
			type: GraphQLString
		},
		password: {
			type: GraphQLString
		}
	}
});

exports.UserSignupPayload = new GraphQLObjectType({
	name: 'userSignupPayload',
	description: 'User signup payload',
	fields: {
		errors: {
			type: GraphQLString
		},
	}
})

exports.UserLogin = new GraphQLObjectType({
	name: 'userLogin',
	description: 'Login form input',
	fields: {
		email: {
			type: GraphQLString,
		},
		password: {
			type: GraphQLString
		}
	}
})


exports.UserLoginPayload = new GraphQLObjectType({
	name: 'userLoginPayload',
	description: 'Login payload',
	fields: {
		user: {
			type: User
		},
		token: {
			type: GraphQLString
		}
	}
})