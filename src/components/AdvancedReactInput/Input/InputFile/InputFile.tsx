import React from 'react'
import BaseInput, { BaseInputProps, BaseInputState } from '../BaseInput/BaseInput'
import { readFile } from './helpers'

export interface IInputFileState extends BaseInputState {
	files: File[],
}

class InputFile extends BaseInput<BaseInputProps, IInputFileState> {

	public static type = 'file';

	public state = {
		files: [],
	}

	protected filterValue = (value: any): any => {
		return Array.from(value);
	}

	protected onChange = async (e: React.ChangeEvent<any>): Promise<void> => {
		let callback: () => void = undefined;

		if (this.props.onChange && typeof this.props.onChange === 'function' ) {
			callback = () => this.props.onChange(this.state.files)
		}

		this.setState({ files: this.filterValue(e.target.files) }, callback);
	};

	public render() {
		return this.container(
			<label className={'is-input-field'}>

				<div className={'cursor-pointer'}>
					Select File
				</div>

				{ this.state.files.length > 0 && (
					<div>
						{ this.state.files.map(file => file.name).join(', ') }
					</div>
				) }

				<input
					type={'file'}
					className={'opacity-0 w-0 h-0 absolute'}
					name={this.props.name}
					onChange={this.onChange}
					multiple={true}
				/>

			</label>
		);
	}

}

export default InputFile
