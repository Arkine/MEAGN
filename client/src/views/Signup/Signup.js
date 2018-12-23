import React from 'react';

import {Container} from './SignupStyled';
import {
	Form,
	FormGroup,
	TextInput,
	FormButton
} from 'app/components/form';
import {FormError} from 'app/components/form/FormStyled';

import withData from 'app/decorators/withData';
import {SIGNUP_USER} from 'app/queries/users';

@withData(SIGNUP_USER, {
	props: ({mutate, data}) => ({
		signup: async ({username, email, password}) => mutate({variables: {username, email, password}}),
		data
	})
})
export default class Signup extends React.Component {
	state = {
		errors: {},
		formErrors: [],
		isLoading: false
	}

	handleFormSubmit = async ({errors, values}) => {
		if (Object.keys(errors).length) {
			this.setState({
				errors,
			});

			return;
		}

		try {
			const data = await this.props.signup(values);
			if (data.signup.errors) {
				this.setState({
					formErrors: data.signup.errors
				})
			}
		} catch(e) {
			console.log('signup err', e);
			this.setState({
				formErrors: e.graphQLErrors
			});
		}
	}

	validate = values => {
		return {};
	}

	render() {
		console.log(this.props)
		return (
			<Container>
				<Form
					onSubmit={this.handleFormSubmit}
					validator={this.validate}
				>
					<h1>Signup</h1>
					{this.state.formErrors.length > 0 && this.state.formErrors.map(error => <FormError><FormError.Message>{error.message}</FormError.Message></FormError>)}
					<FormGroup>
						<TextInput
							type="text"
							name="username"
							label="Username"
							error={this.state.errors['username']}
							required
						/>

						<TextInput
							type="email"
							name="email"
							label="Email"
							error={this.state.errors['username']}
							required
						/>

						<TextInput
							type="password"
							name="password"
							label="Password"
							error={this.state.errors['password']}
							required
						/>

						<TextInput
							type="password"
							name="confirm-password"
							label="Confirm-Password"
							error={this.state.errors['confirm-password']}
							required
						/>
					</FormGroup>
					<FormButton type="submit" text="Submit" isLoading={this.state.isLoading} />
				</Form>
			</Container>
		);
	}
}