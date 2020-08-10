import React from 'react'
import BaseInput from '../BaseInput/BaseInput'

class InputVideo extends BaseInput {

	public static type = 'video';

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

export default InputVideo
