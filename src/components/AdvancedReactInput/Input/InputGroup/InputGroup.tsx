import React from 'react'
import Input from '../Input'
import BaseInput, { BaseInputProps, BaseInputState } from '../BaseInput/BaseInput'

export interface IInputGroupProps extends BaseInputProps {
	fields: BaseInputProps[],
}

export interface IInputGroupState extends BaseInputState {

}

class InputGroup extends BaseInput<IInputGroupProps, IInputGroupState> {

	public static type = 'group';

	public state = {
		value: this.props.value || '',
	}

	public render() {
		return this.container(
			<div>
				{
					this.props.fields.map((fieldProps, i) => {
						return <Input key={i} {...fieldProps} />;
					})
				}
			</div>
		);
	}

}

export default InputGroup
