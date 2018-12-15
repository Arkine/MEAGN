const userResolvers = require('./types/user').resolvers;
const User = require('./types/user').typeDef;

module.exports = {
    typeDefs: [userResolvers],
    resolvers: {...User}
}