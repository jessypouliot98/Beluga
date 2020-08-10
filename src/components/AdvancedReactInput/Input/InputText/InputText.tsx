import React from 'react'
import BaseInput from '../BaseInput/BaseInput'

class InputText extends BaseInput {

	public static type = 'text';

	public state = {
		value: this.props.value || '',
	}

	public render() {
		return this.container(
			<textarea
				name={this.props.name}
				placeholder={this.props.placeholder}
				value={this.state.value}
				className={'is-input-field is-field-textarea'}
				onChange={this.onChange}
			/>
		);
	}

}

export default InputText
