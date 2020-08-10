import React from 'react'
import BaseInput from '../BaseInput/BaseInput'

class InputDateTime extends BaseInput {

	public static type = 'geo';

	public render() {
		return this.container(
			<input
				type={'text'}
				name={this.props.name}
				placeholder={this.props.placeholder}
				value={this.state.value}
				onChange={this.onChange}
			/>
		);
	}

}

export default InputDateTime
