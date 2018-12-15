const GraphQLSchema = require('graphql').GraphQLSchema;

const types = require('./types/rootTypes');

const query = require('./resolvers/rootQuery');
const mutation = require('./mutations/rootMutation');

module.exports = new GraphQLSchema({
	query,
	mutation,
	types
});