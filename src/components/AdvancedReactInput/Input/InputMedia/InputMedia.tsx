import React from 'react'
import BaseInput from '../BaseInput/BaseInput'

class InputMedia extends BaseInput {

	public static type = 'media';

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

export default InputMedia
