import React from 'react';
import styled from 'styled-components';

import media from 'app/helpers/mediaQuery';

import {
	ValuesContext,
	ErrorsContext,
	SetValueContext
} from './FormContexts';

const Container = styled.form`
	border-radius: 4px;

	padding: 1rem;

	width: auto;

	min-width: 500px;
	max-width: 750px;

	${media.tablet`
		min-width: 250px;
	`}
`;


export default class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			errors: {},
			values: {}
		}

		this._formEl = React.createRef();
	}

	handleFieldChange = e => {
		this.updateField(e.target.name, e.target.value);
	}

	updateField = (field, val) => {
		this.setState({
			values: {
				...this.state.values,
				[field]: val
			}
		});
	}

	onSubmit = e => {
		e.preventDefault();
		const isValid = this.validate();
		const {errors, values} = this.state;

		this.props.onSubmit({errors, values}, e);
	}

	validate() {
		let isValid = true;
		isValid = this._formEl.current.checkValidity();

		// if (form) {
		// 	// if (form.checkValidity() === false) {
		// 		for(let i=0; i<form.length; i++) {
		// 			const elem = form[i];
		// 			// if (!elem.validity.valid) {
		// 				this.setState({
		// 					errors: {
		// 						...this.state.errors,
		// 						[elem.name]:  'not valid'//elem.validationMessage,
		// 					}
		// 				});
		// 				console.log('INVALIDATIONG', this.state.errors);
		// 			// }
		// 		}

		// 		isValid = false;
		// 	// }
		// }

		if (this.props.validator) {
			this.props.validator(this.state.values);
			// isValid = false;
		}


		return isValid;
	}

	render() {
		const {onSubmit, ...rest} = this.props;
		return (
			<ValuesContext.Provider value={this.state.values}>
				<ErrorsContext.Provider value={this.state.errors}>
					<SetValueContext.Provider value={this.updateField}>
						<Container onSubmit={this.onSubmit} {...rest} ref={this._formEl}>
							{this.props.children}
						</Container>
					</SetValueContext.Provider>
				</ErrorsContext.Provider>
			</ValuesContext.Provider>
		);
	}
}

export const FormConsumer = ({children}) => {
	return (
		<ErrorsContext.Consumer>
			{errors => (
				<ValuesContext.Consumer>
					{values => (
						<SetValueContext.Consumer>
							{setValue => children({errors, values, setValue})}
						</SetValueContext.Consumer>
					)}
				</ValuesContext.Consumer>
			)}
		</ErrorsContext.Consumer>
	);
}