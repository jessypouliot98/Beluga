import React from 'react'
import BaseInput, { BaseInputProps, BaseInputState } from '../BaseInput/BaseInput'
import Input from '../Input'

export interface IInputRepeaterProps extends BaseInputProps {
	fields: BaseInputProps[],
}

export interface IInputRepeaterState extends BaseInputState {
	instances: JSX.Element[],
}

class InputRepeater extends BaseInput<IInputRepeaterProps, IInputRepeaterState> {

	public static type = 'repeater';

	UID = 0;

	public state = {
		value: this.props.value || '',
		instances: [],
	}

	protected createInstance(id: string) {
		return (
			<div key={id} className={'flex flex-row'}>
				<div className={'flex flex-col p-2 justify-center bg-gray-300'}>
					<button type={'button'} onClick={(e) => this.removeInstance(e, id)}>Remove</button>
					<button type={'button'} onClick={(e) => this.insertInstance(e, id)}>Add</button>
				</div>
				<div className={'flex w-full'}>
					{
						this.props.fields.map((fieldProps, i) => {
							return <Input key={i} {...fieldProps} />;
						})
					}
				</div>
			</div>
		);
	}

	protected removeInstance = (e, id) => {
		e.preventDefault();

		this.setState(prevState => ({
			instances: prevState.instances
				.filter(instance => {
					return instance.key !== id.toString();
				}),
		}));
	}

	protected insertInstance = (e, id) => {
		e.preventDefault();

		const newId = ++this.UID;

		this.setState(prevState => {
			const instances = [...prevState.instances];

			const insertIndex = instances.findIndex(instance => {
				return instance.key === id.toString();
			});

			instances.splice(insertIndex + 1, 0, this.createInstance(newId.toString()));

			return { instances };
		});
	}

	protected addInstance = (e? :any) => {
		if (e) {
			e.preventDefault();
		}

		const id = ++this.UID;

		const instance = this.createInstance(id.toString());

		this.setState(prevState => ({
			instances: [...prevState.instances, instance],
		}))
	}

	public render() {
		return this.container(
			<React.Fragment>
				<div className={this.state.instances.length ? 'border border-gray-300' : ''}>
					{this.state.instances}
				</div>

				<button
					type={'button'}
					onClick={this.addInstance}
				>
					Add
				</button>
			</React.Fragment>
		);
	}

}

export default InputRepeater
