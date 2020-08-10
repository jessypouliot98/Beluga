import React from 'react'
import BaseInput, { BaseInputProps } from '../BaseInput/BaseInput'

export interface IInputNumber extends  BaseInputProps {
	type: 'number' | 'int' | 'uint' | 'float'
}

class InputNumber extends BaseInput<IInputNumber> {

	public static type = 'number';

	public get type(): string {
		return this.props.type;
	}

	public state = {
		value: this.props.value || '',
	}

	protected filterValue = (value: any): any => {
		let newValue: any;

		switch (this.props.type) {

			case 'int':
				newValue = parseInt(value);
				break;

			case 'uint':
				newValue = Math.max(0, parseInt(value));
				break;

			case 'float':
			case 'number':
			default:
				newValue = parseFloat(value);

		}

		if (Number.isNaN(newValue)) {
			newValue = '';
		}

		return newValue;
	}

	public render() {
		return this.container(
			<input
				type={'number'}
				name={this.props.name}
				placeholder={this.props.placeholder}
				value={this.state.value}
				className={'is-input-field'}
				onChange={this.onChange}
			/>
		);
	}

}

export default InputNumber
