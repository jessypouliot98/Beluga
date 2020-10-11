import React from 'react'
import BaseInput, { BaseInputProps, BaseInputState } from '../BaseInput/BaseInput'
import Thumbnail from '../../Components/Thumbnail/Thumbnail';
import Modal from 'react-modal'

Modal.setAppElement('#root');

export interface IInputGalleryProps extends BaseInputProps {}

export interface IInputGalleryState extends BaseInputState {
	modalOpened: boolean,
}

class InputGallery extends BaseInput<IInputGalleryProps, IInputGalleryState> {

	public static type = 'gallery';

	public state = {
		value: this.props.value || '',
		modalOpened: false,
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

				{/*
					<Modal
						isOpen={this.state.modalOpened}
						onRequestClose={this.closeModal}
					>
						<Thumbnail
							className={'w-1/6'}
							src={'https://jessypouliot.ca/storage/markus-spiske-kdbwmsq9wh0-unsplash-450x450.jpg'}
						/>
					</Modal>
				*/}

			</div>
		);
	}

}

export default InputGallery
