import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Router} from 'react-router-dom';
import {Normalize} from 'styled-normalize';

import history from 'app/services/history';

import theme from './appTheme';

import Header from 'app/components/common/Header';
import Footer from 'app/components/common/Footer';
import Body from 'app/components/common/Body';
import Routes from 'app/components/routes/Routes';
import {LoadingSpinner} from 'app/components/loading';
import BaseStyles from 'app/components/common/BaseStyles';

export default class App extends React.Component {
	static defaultProps = {
		auth: {
			isAuthenticated: false
		}
	}

	state = {
		loading: true,
		isAuthenticated: false,
		appAuthenticated: false,
	}

	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			isAuthenticated: false,
			appAuthenticated: false,
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				loading: false
			});
		}, 1500);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.auth.isAuthenticated !== this.props.auth.isAuthenticated) {
			console.log('is now auth')
			this.setState({
				isAuthenticated:  this.props.auth.isAuthenticated
			});
		}
	}

	renderBodyContent() {
		if (this.state.loading) {
			return  <LoadingSpinner isLoading={true} />;
		}

		return (
			<React.Fragment>
				<Normalize />
				<BaseStyles />

				<Header />
				<Body>
					<Routes childProps={this.state} />
				</Body>
				<Footer />
			</React.Fragment>
		)
	}

    render() {
        return (
			<Router history={history}>
				<ThemeProvider theme={theme}>
					{this.renderBodyContent()}
				</ThemeProvider>
			</Router>
        );
    }
}