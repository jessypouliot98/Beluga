import React from 'react'
import BaseInput, { BaseInputProps, BaseInputState } from '../BaseInput/BaseInput'
import { option } from '../types'
import MultiSelect from 'react-multi-select-component'

export interface IInputSelectState extends BaseInputState {
	rawValue: option[],
}

class InputSelect extends BaseInput<BaseInputProps, IInputSelectState> {

	public static type = 'select';

	public state = {
		value: [],
		rawValue: [],
	}

	protected filterValue = (selected: option[]): any => {
		return selected.map(option => option.value);
	}

	protected onChange = (selected: any): void => {
		let callback:any = undefined;

		if (this.props.onChange && typeof this.props.onChange === 'function' ) {
			callback = () => this.props.onChange(this.state.value)
		}

		this.setState({
			value: this.filterValue(selected),
			rawValue: selected
		}, callback);
	};

	public render() {
		return this.container(
			<MultiSelect
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
