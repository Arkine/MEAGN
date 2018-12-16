import ApolloClient from 'apollo-boost';

import withMiddleware from 'app/middleware';

export default new ApolloClient({
    uri: `http://localhost:4466`,
    fetchOptions: {
        credentials: 'include'
    },
    request: withMiddleware
});