import React from 'react'
import BaseInput, { BaseInputProps, BaseInputState } from '../BaseInput/BaseInput'

export interface IInputPasswordState extends BaseInputState {
	hidden: boolean,
}

class InputPassword extends BaseInput<BaseInputProps, IInputPasswordState> {

	public static type = 'password';

	public state = {
		value: this.props.value || '',
		hidden: true,
	}

	public get inputType(): 'password' | 'text' {
		return this.state.hidden ? 'password' : 'text';
	}

	protected toggleHidden = () => {
		this.setState(prevState => ({ hidden: !prevState.hidden }));
	}

	public render() {
		return this.container(
			(
				<input
					type={this.inputType}
					name={this.props.name}
					placeholder={this.props.placeholder}
					value={this.state.value}
					className={'is-input-field'}
					onChange={this.onChange}
				/>
			), (
				<button onClick={this.toggleHidden}>
					{ this.state.hidden ? 'show' : 'hide' }
				</button>
			)
		);
	}

}

export default InputPassword
