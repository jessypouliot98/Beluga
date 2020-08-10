import React from 'react'
import BaseInput from '../BaseInput/BaseInput'

class InputEmail extends BaseInput {

	public static type = 'email';

	public state = {
		value: this.props.value || '',
	}

	protected filterValue = (value: any): any => {
		return value.toLowerCase();
	}

	public render() {
		return this.container(
			<input
				type={'email'}
				name={this.props.name}
				placeholder={this.props.placeholder}
				value={this.state.value}
				className={'is-input-field'}
				onChange={this.onChange}
			/>
		);
	}

}

export default InputEmail
