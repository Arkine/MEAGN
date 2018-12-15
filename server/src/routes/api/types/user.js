exports.typeDef = `
    extend type Query {
        user(id: String!): User
    }

    type User {
        username: String,
        avatar: String
    }
`;

exports.resolvers = {
    Query: {
        user: (_, args, context, info) => {},
    },
    Mutation: {
        createUser: (_, args, context, info) => {}
    }
}

