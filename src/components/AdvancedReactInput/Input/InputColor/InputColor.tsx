import React from 'react'
import BaseInput from '../BaseInput/BaseInput'
import { SketchPicker, ColorResult } from 'react-color'

class InputColor extends BaseInput {

	public static type = 'color';

	public state = {
		value: this.props.value || '',
	}

	protected onChange = (value: any): void => {
		let callback:any = undefined;

		if (this.props.onChange && typeof this.props.onChange === 'function' ) {
			callback = () => this.props.onChange(this.state.value)
		}

		this.setState({ value: this.filterValue(value) }, callback);
	};

	protected setColor = (color: ColorResult) => {
		this.onChange(color.hex)
	}

	public render() {
		return this.container(
			(
				<input
					type={'text'}
					name={this.props.name}
					placeholder={this.props.placeholder}
					value={this.state.value}
					className={'is-input-field'}
					readOnly
				/>
			), (
				<button
					type={'button'}
					onClick={this.togglePopup}
				>
					btn
				</button>
			), (
				<SketchPicker
					color={this.state.value}
					onChange={this.setColor}
					disableAlpha={true}
				/>
			)
		);
	}

}

export default InputColor
