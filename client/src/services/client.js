import ApolloClient from 'apollo-boost';

import withMiddleware from 'app/middleware';

export default new ApolloClient({
    uri: `http://localhost:5000/graphql`,
    fetchOptions: {
        credentials: 'include'
    },
    request: withMiddleware
});