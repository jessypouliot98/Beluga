import React from 'react'
import Input, { IInputProps } from '../Input/Input'
import axios, { AxiosResponse } from 'axios'
import './style.scss'

export type enumMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export type FormProps = {
	className?: string,
	method?: enumMethod,
	action: string,
	inputs: Array<IInputProps>,
	callback?: (resp: AxiosResponse | Error) => void,
}

export type FormState = {
	value: object,
}

class Form extends React.Component<FormProps, FormState> {

	public state = {
		value: {}
	}

	protected get method(): enumMethod {
		return this.props.method || 'post';
	}

	protected onSubmit = async(e: any) => {
		e.preventDefault();
		e.stopPropagation();

		let request: Promise<AxiosResponse<any>>;

		switch (this.method) {

			case 'get':
				request = axios.get(this.props.action);
				break;

			case 'put':
				request = axios.put(this.props.action, this.state.value);
				break;

			case 'patch':
				request = axios.patch(this.props.action, this.state.value);
				break;

			case 'delete':
				request = axios.delete(this.props.action);
				break;

			case 'post':
			default:
				request = axios.post(this.props.action, this.state.value);
				break;

		}

		try {
			const resp = await request;

			if (this.props.callback && typeof this.props.callback === 'function' ) {
				this.props.callback(resp);
			}

		} catch(e) {
			console.error(e);
		}
	}

	protected onChange = (prop: string, value: any, next?: (value: any) => void) => {
		let callback: () => void = undefined;

		if (next && typeof next === 'function' ) {
			callback = () => next(value)
		}

		if (!value) {
			value = undefined;
		}

		this.setState(prevState => {
			return {
				value: {
					...prevState.value,
					[prop]: value,
				}
			}
		}, callback)
	}

	public render() {
		return (
			<form
				className={['ari-form', this.props.className].join(' ')}
				method={this.method}
				onSubmit={this.onSubmit}
			>

				<div className={'is-form-body'}>
					{ this.props.inputs.map((props, i) => {
						return (
							<Input
								key={i}
								{...props}
								onChange={(value) => this.onChange(props.name, value, props.onChange)}
							/>
						)
					}) }
				</div>

				<div className={'is-form-footer'}>
					<button className={'is-form-submit'}>Send</button>
				</div>

			</form>
		)
	}

}

export default Form
