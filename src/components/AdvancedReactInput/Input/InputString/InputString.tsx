import React from 'react'
import BaseInput from '../BaseInput/BaseInput'

class InputString extends BaseInput {

	public static type = 'string';

	public state = {
		value: this.props.value || '',
	}

	public render() {
		return this.container(
			<input
				type={'text'}
				name={this.props.name}
				placeholder={this.props.placeholder}
				value={this.state.value}
				className={'is-input-field'}
				onChange={this.onChange}
			/>
		);
	}

}

export default InputString
