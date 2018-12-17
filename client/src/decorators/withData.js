import React from 'react';
import {graphql} from 'react-apollo';

const withData  = (query, options = {}) => WrappedComponent => {
    const newC = class extends React.Component {
        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    return graphql(query, {
        ...options
    })(newC);
}

export default withData;