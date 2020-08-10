import React from 'react'
import BaseInput from '../BaseInput/BaseInput'

class InputUrl extends BaseInput {

	public static type = 'url';

	public state = {
		value: this.props.value || '',
	}

	public render() {
		return this.container(
			<input
				type={'url'}
				name={this.props.name}
				placeholder={this.props.placeholder}
				value={this.state.value}
				className={'is-input-field'}
				onChange={this.onChange}
			/>
		);
	}

}

export default InputUrl
