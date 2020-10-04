import React from 'react'
import BaseInput from '../BaseInput/BaseInput'

class InputRange extends BaseInput {

	public static type = 'range';

	public state = {
		value: this.props.value || '',
	}

	public render() {
		return this.container(
			<input
				type={'range'}
				className={'is-input-field is-field-range'}
				name={this.props.name}
				value={this.state.value}
				onChange={this.onChange}
			/>
		);
	}

}

export default InputRange
