import React from 'react'
import BaseInput from '../BaseInput/BaseInput'

class InputHidden extends BaseInput {

	public static type = 'hidden';

	public state = {
		value: this.props.value,
	}

	public render() {
		return (
			<input
				type={'hidden'}
				name={this.props.name}
				value={this.state.value}
			/>
		);
	}

}

export default InputHidden
