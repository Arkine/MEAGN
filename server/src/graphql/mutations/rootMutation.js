const GraphQLObjectType = require('graphql').GraphQLObjectType;

const user = require('./user');

module.exports = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		...user
	}
});