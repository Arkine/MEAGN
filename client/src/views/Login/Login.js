import React from 'react';

import {Container} from './LoginStyled';
import {
	Form,
	FormGroup,
	TextInput,
	FormButton
} from 'app/components/form';
import { Button } from '../../components/common/Button';

import withData from 'app/decorators/withData'
import {LOGIN_USER} from 'app/queries/users';

@withData(LOGIN_USER, {
	props: ({mutate, data}) => ({
		login: async ({email, password}) => mutate({variables: {email, password}}),
		data
	})
})
export default class Login extends React.Component {
	static defaultProps = {
		auth: {
			isAuthenticated: false
		}
	}
	state = {
		errors: {},
		isLoading: false
	}

	componentDidUpdate() {
		if (this.props.auth.isAuthenticated) {
			const {state} = this.props.location;

			const redirectUrl = (state && state.referrer) ? state.referrer : '/';

			this.props.history.push(redirectUrl);
		}
	}

	handleFormSubmit = async ({errors, values}) => {

		if (Object.keys(errors).length) {
			this.setState({
				errors,
			});

			return;
		}

		console.log(await this.props.login(values));
	}

	validateForm = values => {
		const keys = Object.keys(values);
		const minLen = 5;

		const errors = {};
		for (let i=0; i<keys.length; i++) {
			const val = values[keys[i]];
		
			if (val.length < minLen) {
				console.log('is less', keys[i])
				errors[keys[i]] = `${keys[i]} must be at least ${minLen} characters in length`;
			}
		}

		return errors;
	}

	render() {
		console.log(this.props)
		return (
			<Container>
				<Form onSubmit={this.handleFormSubmit} validator={this.validateForm} isLoading={this.props.auth.isFetching}>
					<h1>Login</h1>
					<FormGroup>
						<TextInput
							type="text"
							name="email"
							error={this.state.errors['email']}
							label="email"
							required
						/>

						<TextInput
							type="password"
							name="password"
							error={this.state.errors['password']}
							label="Password"
							required
						/>
					</FormGroup>
					<Container.ButtonGroup>
						<FormButton type="submit" text="Submit" loading={this.props.auth.isFetching} />
						<Button.Link to="/signup">Sign Up</Button.Link>
					</Container.ButtonGroup>
				</Form>
			</Container>
		);
	}
}