import React from 'react'
import BaseInput, { BaseInputProps, BaseInputState } from '../BaseInput/BaseInput'
import Thumbnail from '../../Components/Thumbnail/Thumbnail'
import Modal from 'react-modal'

Modal.setAppElement('#root');

export interface IInputMediaProps extends BaseInputProps {
	type?: 'image' | 'video',
}

export interface IInputMediaState extends BaseInputState {
	modalOpened: boolean,
}

class InputMedia extends BaseInput<IInputMediaProps, IInputMediaState> {

	public static type = 'media';

	public get type(): string {
		return this.props.type || (this.constructor as any).type;
	}

	public state = {
		value: this.props.value || '',
		modalOpened: false,
	}

	public get info(): string {
		switch (this.type) {

			case 'image':
				return 'No image selected';

			case 'video':
				return 'No video selected';

			default:
				return "No media selected";
		}
	}

	public openModal = (e?: React.MouseEvent) => {
		if (e) {
			e.preventDefault();
		}

		this.setState(prevState => ({ modalOpened: !prevState.modalOpened }));
	}

	public closeModal = (e?: React.MouseEvent) => {
		if (e) {
			e.preventDefault();
		}

		this.setState(prevState => ({ modalOpened: !prevState.modalOpened }));
	}

	public render() {
		return this.container(
			<div className={'flex'}>

				<Thumbnail
					className={'w-1/3 border'}
					onClick={this.openModal}
				>
					<div>Add</div>
				</Thumbnail>

				<div className={'flex w-2/3 justify-center items-center align-middle'}>
					<span>{ this.info }</span>
				</div>

				<Modal
					isOpen={this.state.modalOpened}
					onRequestClose={this.closeModal}
				>
					<Thumbnail
						className={'w-1/6'}
						src={'https://jessypouliot.ca/storage/markus-spiske-kdbwmsq9wh0-unsplash-450x450.jpg'}
					/>
				</Modal>

			</div>
		);
	}

}

export default InputMedia
