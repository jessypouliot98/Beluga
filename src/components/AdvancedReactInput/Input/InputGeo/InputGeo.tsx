import React from 'react'
import BaseInput, { BaseInputProps, BaseInputState } from '../BaseInput/BaseInput'

const GOOGLE_MAPS_API_KEY = (window as any)?.__ADVANCED_REACT_INPUT__?.env?.GOOGLE_MAPS_API_KEY || '';

export interface IInputGeoProps extends BaseInputProps {
	lat?: number,
	lng?: number,
}

export interface IInputGeoState extends BaseInputState {
	loading: boolean,
}

class InputGeo extends BaseInput<IInputGeoProps, IInputGeoState> {

	public static type = 'geo';

	protected CALLBACK_NAME = '$googleMapSDKLoaded';
	protected CALLBACK_RESOLVER = '$googleMapSDKResolver';

	protected _mapContainer = React.createRef<HTMLDivElement>();
	protected _map: any = null;

	public state = {
		value: this.props.value || '',
		loading: true,
	}

	async componentDidMount() {
		await this.loadSDK();

		await this.initMap();
		this.setState({ loading: false });
	}

	protected loadSDK() {
		return new Promise((resolve, _reject) => {
			if (this.google) {
				resolve();
				return;
			}

			const w: any = window;

			if (typeof w[this.CALLBACK_NAME] !== 'function') {

				const script = document.createElement('script');
				script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=${this.CALLBACK_NAME}`;
				script.defer = true;

				w[this.CALLBACK_RESOLVER] = [];

				w[this.CALLBACK_NAME] = () => {
					w[this.CALLBACK_RESOLVER].forEach(resolver => resolver());
				};

				document.head.appendChild(script);
			}

			w[this.CALLBACK_RESOLVER] = [...w[this.CALLBACK_RESOLVER], resolve];
		});
	}

	protected get google() {
		return (window as any).google;
	}

	protected get center() {
		return {
			lat: this.props.lat || 45.5579564,
			lng: this.props.lng || -73.8703845,
		};
	}

	protected initMap = () => {
		this._map = new this.google.maps.Map(this._mapContainer.current, {
			center: this.center,
			zoom: 6,
		});
	}

	public render() {
		return this.container(
			<div ref={this._mapContainer} style={{ height: '350px' }}/>
		);
	}

}

export default InputGeo
