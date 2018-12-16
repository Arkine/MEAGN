const GraphQLObjectType = require('graphql').GraphQLObjectType;

const users = require('./users');

module.exports = new GraphQLObjectType({
	name: 'Query',
	fields: {
		...users,
	}
})