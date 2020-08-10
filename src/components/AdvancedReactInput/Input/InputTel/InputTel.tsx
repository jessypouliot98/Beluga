import React from 'react'
import BaseInput from '../BaseInput/BaseInput'

class InputTel extends BaseInput {

	public static type = 'tel';

	protected _input = React.createRef<HTMLInputElement>();

	public state = {
		value: this.props.value || '',
	}

	protected setCaretPosition = (caretPos: number) => {
		const input: any = this._input.current;

		input.selectionStart = input.selectionEnd = caretPos;
	}

	protected getRawValue = (value: string): string => value.replace(/\D/g, '').substring(0, 11);

	protected filterValue = (value: string): any => {
		let rawValue = this.getRawValue(value);
		let newValue = '';

		if (rawValue.length) {
			if (rawValue.length === 11) {
				newValue += `+${rawValue.substring(0, 1)} (${rawValue.substring(1, 4)}) ${rawValue.substring(4, 7)}-${rawValue.substring(7,11)}`;
			} else {
				for (let emptyChars = 10 - rawValue.length; emptyChars > 0; emptyChars--) {
					rawValue += '_';
				}
				newValue += `(${rawValue.substring(0, 3)}) ${rawValue.substring(3, 6)}-${rawValue.substring(6,10)}`;
			}
		}

		return newValue;
	}

	protected onChange = (e: React.ChangeEvent<any>): void => {
		let callback = () => {
			const rawValue = this.getRawValue(this.state.value);
			let caretPos = 0;
			let numbersFound = 0;

			while (numbersFound !== rawValue.length) {
				if (this.state.value[caretPos] === rawValue[numbersFound]) {
					numbersFound++;
				}

				caretPos++;
			}

			this.setCaretPosition(caretPos);

			if (this.props.onChange && typeof this.props.onChange === 'function' ) {
				this.props.onChange(this.state.value);
			}
		};


		this.setState({ value: this.filterValue(e.target.value) }, callback);
	};

	public render() {
		return this.container(
			<input
				ref={this._input}
				type={'tel'}
				name={this.props.name}
				placeholder={this.props.placeholder}
				value={this.state.value}
				className={'is-input-field'}
				onChange={this.onChange}
			/>
		);
	}

}

export default InputTel
