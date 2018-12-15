import React from 'react';

import { Container } from './StyledLogout';

export default class Logout extends React.PureComponent {
    static defaultProps = {
        logout: () => {},
        history: {}
    }

    componentDidMount() {
        const {logout, history} = this.props;

        logout();

        history.push('/login');
    }

    render() {
        return (
            <Container>
                Logging Out...
            </Container>
        )
    }
}