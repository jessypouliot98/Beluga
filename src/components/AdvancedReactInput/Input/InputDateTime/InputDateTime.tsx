import React from 'react'
import BaseInput, { BaseInputProps, BaseInputState } from '../BaseInput/BaseInput'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export interface IInputDateTimeProps extends BaseInputProps {
	type: 'time' | 'date' | 'datetime'
}

export interface IInputDateTimeState extends BaseInputState {
	value: Date
}

class InputDateTime extends BaseInput<IInputDateTimeProps, IInputDateTimeState> {

	public static type = 'datetime';

	public get type(): string {
		return this.props.type;
	}

	public state = {
		value: this.props.value || new Date(),
	}

	protected get showTimeSelect(): boolean {
		return ['time', 'datetime'].includes(this.props.type);
	}

	protected get dateFormat(): string {
		switch (this.props.type) {

			case 'datetime': return 'Pp';
			case 'time': return 'p';

			case 'date':
			default:
				return 'P';

		}
	}

	protected onChange = (date: any): void => {
		let callback:any = undefined;

		if (this.props.onChange && typeof this.props.onChange === 'function' ) {
			callback = () => this.props.onChange(this.state.value)
		}

		this.setState({ value: this.filterValue(date) }, callback);
	};

	public render() {
		return this.container(
			<DatePicker
				selected={this.state.value}
				onChange={this.onChange}
				showTimeSelect={this.showTimeSelect}
				dateFormat={this.dateFormat}
			/>
		);
	}

}

export default InputDateTime
