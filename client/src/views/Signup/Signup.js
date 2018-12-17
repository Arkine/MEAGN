import React from 'react';

import {Container} from './SignupStyled';
import {
	Form,
	FormGroup,
	TextInput,
	FormButton
} from 'app/components/form';

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
		isLoading: false
	}

	handleFormSubmit = ({errors, values}) => {
		if (Object.keys(errors).length) {
			this.setState({
				errors,
			});

			return;
		}

		this.props.signup(values);
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