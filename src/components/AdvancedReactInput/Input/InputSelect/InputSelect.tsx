import React from 'react'
import BaseInput, { BaseInputProps, BaseInputState } from '../BaseInput/BaseInput'
import { option } from '../types'
import MultiSelect from 'react-multi-select-component'

export interface IInputSelectProps extends BaseInputProps {
	multiple?: boolean,
}

export interface IInputSelectState extends BaseInputState {
	rawValue: option[],
}

class InputSelect extends BaseInput<IInputSelectProps, IInputSelectState> {

	public static type = 'select';

	public state = {
		value: this.props.multiple ? [] : '',
		rawValue: [],
	}

	protected filterValue = (selected: option[]): any => {
		if (this.props.multiple) {
			return selected.map(option => option.value);
		}

		const [option] = selected;

		return option?.value || '';
	}

	protected onChange = (selected: any): void => {
		let callback:any = undefined;

		if (this.props.onChange && typeof this.props.onChange === 'function' ) {
			callback = () => this.props.onChange(this.state.value)
		}

		this.setState(prevState => {
			if (!this.props.multiple) {
				selected = selected.filter(option => {
					return !prevState.rawValue
						.map(raw => raw.value)
						.find(oldValue => {
							console.log(oldValue, option.value)
							return oldValue === option.value;
						});;
				});
			}

			return {
				value: this.filterValue(selected),
				rawValue: selected
			};
		}, callback);
	};

	public render() {
		return this.container(
			<MultiSelect
				hasSelectAll={!!this.props.multiple}
				options={this.props.options}
				value={this.state.rawValue}
				onChange={this.onChange}
				labelledBy={this.props.placeholder || this.props.name || 'select'}
				overrideStrings={{
					selectSomeItems: this.props.placeholder
				}}
			/>
		);
	}

}

export default InputSelect
