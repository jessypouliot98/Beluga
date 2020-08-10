import React from 'react'
import BaseInput, { BaseInputProps, BaseInputState } from '../BaseInput/BaseInput'
import { option } from '../types'

export interface IInputRadioState extends BaseInputState {
	value: string|number,
}

class InputRadio extends BaseInput<BaseInputProps, IInputRadioState> {

	public static type = 'radio';

	public state = {
		value: this.props.value,
	}

	protected onChange = (e: React.ChangeEvent<any>): void => {
		let callback:any = undefined;

		if (this.props.onChange && typeof this.props.onChange === 'function' ) {
			callback = () => this.props.onChange(this.state.value)
		}

		const value: string = e.target.value;
		const checked: boolean = e.target.checked;

		this.setState(() => {
			if (!checked) {
				return { value: undefined }
			}

			return { value: value }
		}, callback);
	};

	protected isChecked = (value: any): boolean => {
		return this.state.value == value;
	}

	public render() {
		return this.container(
			<div className={'is-input-field is-field-radio'}>
				{
					this.props.options.map((option: option, i) => (
						<label key={i} className={'is-field-radio-item'}>

							<span className={'is-box-label'}>{ option.label }</span>

							<input
								type={'radio'}
								name={`${this.props.name}--${option.value}`}
								value={option.value}
								placeholder={this.props.placeholder}
								checked={this.isChecked(option.value)}
								onChange={this.onChange}
							/>

						</label>
					))
				}
			</div>
		);
	}

}

export default InputRadio
