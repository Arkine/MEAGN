import React from 'react';
import {graphql} from 'react-apollo';

const withData  = query => WrappedComponent => {
    const newC = class extends React.Component {
        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    return graphql(query, {
        props: ({ data }) => ({
           data
        })
    })(newC);
}

export default withData;