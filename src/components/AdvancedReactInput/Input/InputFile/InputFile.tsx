import React from 'react'
import BaseInput from '../BaseInput/BaseInput'

class InputFile extends BaseInput {

	public static type = 'file';
	
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
				onChange={this.onChange}
			/>
		);
	}

}

export default InputFile
