import React from 'react'
import BaseInput from '../BaseInput/BaseInput'

class InputRange extends BaseInput {

	public static type = 'range';

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

export default InputRange
