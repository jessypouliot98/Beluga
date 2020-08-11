import React from 'react'
import BaseInput from '../BaseInput/BaseInput'

class InputBoolean extends BaseInput {

	public static type = 'boolean';

	public state = {
		value: this.props.value || '',
	}

	protected onChange = (e: React.ChangeEvent<any>): void => {
		let callback: () => void = undefined;

		if (this.props.onChange && typeof this.props.onChange === 'function' ) {
			callback = () => this.props.onChange(this.state.value)
		}

		this.setState({ value: this.filterValue(e.target.checked) }, callback);
	};

	public render() {
		return this.container(
			<label className={'is-input-field is-field-boolean'}>

				<span>{ this.props.placeholder }</span>

				<input
					type={'checkbox'}
					name={this.props.name}
					placeholder={this.props.placeholder}
					checked={this.state.value}
					onChange={this.onChange}
				/>

			</label>
		);
	}

}

export default InputBoolean
