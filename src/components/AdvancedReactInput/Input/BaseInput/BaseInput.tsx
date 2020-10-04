import React from 'react'
import { enumInput, option } from '../types'
import './style.scss'

export type BaseInputProps = {
	type?: enumInput,
	name?: string,
	value?: any,
	label?: string,
	placeholder?: string,
	className?: string,
	style?: React.CSSProperties,
	width?: string|number,
	required?: boolean,
	multiple?: boolean,
	fields?: BaseInputProps[],
	match?: RegExp|RegExp[],
	options?: option[],
	onChange?: (...args: any) => void,
}

export type BaseInputState = {
	value?: any,
	popupOpen?: boolean,
}

abstract class BaseInput<P extends BaseInputProps = BaseInputProps, S extends BaseInputState = BaseInputState> extends React.Component<P, S> {

	public static type: string;

	public get type(): string {
		return (this.constructor as any).type;
	}

	protected get styles(): React.CSSProperties {
		let width: string;

		if (this.props.width) {
			if (typeof this.props.width === 'number') {
				width = `${this.props.width}%`;
			} else if(typeof this.props.width === 'string') {
				width = this.props.width;
			}
		}

		return { width, ...this.props.style as any };
	}

	protected get validationClass(): string {
		if (
			(this.props.match == undefined) ||
			(!this.state.value && !this.props.required)
		) {
			return '';
		}

		if (!this.state.value && this.props.required) {
			return 'is-required';
		}

		const tests: RegExp[] = Array.isArray(this.props.match) ? this.props.match : [this.props.match];

		return tests.every(regex => regex.test(this.state.value)) ? 'is-valid' : 'is-invalid';
	}

	protected filterValue = (value: any): any => {
		return value;
	}

	protected onChange = (e: React.ChangeEvent<any>): void => {
		let callback: () => void = undefined;

		if (this.props.onChange && typeof this.props.onChange === 'function' ) {
			callback = () => this.props.onChange(this.state.value)
		}

		this.setState({ value: this.filterValue(e.target.value) }, callback);
	};

	protected togglePopup = (e) => {
		e.preventDefault();
		this.setState(prevState => ({ popupOpen: !prevState.popupOpen }));
	}

	protected disableOnEnterClick = (e) => {
		if (e.keyCode === 13) {
			e.preventDefault();
		}
	}

	protected container(input: JSX.Element, action?: JSX.Element, popup?: JSX.Element): JSX.Element {
		return (
			<div
				className={['ari-input', 'is-input-container', this.validationClass, this.props.className].join(' ')}
				style={this.styles}
			>

				{ this.props.label && (
					<label className={'is-input-label'}>
						{ this.props.label }
						{ this.props.required && (
							<span>*</span>
						) }
					</label>
				) }

				<div className={`is-field-wrapper is-${this.type}-wrapper`}>

					{input}

					{ (popup && this.state.popupOpen) && (
						<div className={'ari-popup'}>
							{ popup }
						</div>
					) }

					{ action && (
						<div className={'ari-action'}>
							{ action }
						</div>
					) }

				</div>

			</div>
		);
	}

}

export default BaseInput
