const GraphQLObjectType = require('graphql').GraphQLObjectType;

const team = require('./team');


module.exports = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		...team
	}
});