import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo';

import client from 'app/services/client';

import App from 'app/views/app';

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    ,
    document.getElementById('root')
);