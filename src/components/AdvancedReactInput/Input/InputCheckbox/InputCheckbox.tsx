import React from 'react'
import BaseInput, { BaseInputProps, BaseInputState } from '../BaseInput/BaseInput'
import { option } from '../types'

export interface IInputCheckboxState extends BaseInputState {
	value: Array<string|number>,
}

class InputCheckbox extends BaseInput<BaseInputProps, IInputCheckboxState> {

	public static type = 'checkbox';

	public state = {
		value: [],
	}

	protected onChange = (e: React.ChangeEvent<any>): void => {
		let callback:any = undefined;

		if (this.props.onChange && typeof this.props.onChange === 'function' ) {
			callback = () => this.props.onChange(this.state.value)
		}

		const value: string = e.target.value;
		const checked: boolean = e.target.checked;

		this.setState(prevState => {
			if (!checked) {
				return { value: prevState.value.filter(v => v != value) }
			}

			return { value: [...prevState.value, value] }
		}, callback);
	};

	protected isChecked = (value: any): boolean => {
		return this.state.value.some(v => v == value);
	}

	public render() {
		return this.container(
			<div className={'is-input-field is-field-checkbox'}>
				{
					this.props.options.map((option: option, i) => (
						<label key={i} className={'is-field-box-item'}>

							<span className={'is-box-label'}>{ option.label }</span>

							<input
								type={'checkbox'}
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

export default InputCheckbox
