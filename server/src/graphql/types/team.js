const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLString = require('graphql').GraphQLString;
const GraphQLInt = require('graphql').GraphQLInt;

exports.Team = new GraphQLObjectType({
	name: 'Team',
	description: 'A teamn',
	fields: {
		name: {
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
