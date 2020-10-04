import React from 'react'
import { getContent, isJSON } from './helpers'

export interface IRendererProps {
	children: string | object,
	className?: string,
	style?: object,
}

export interface IRendererState {

}

class Renderer extends React.Component<IRendererProps, IRendererState> {

	getData = (): string | object => {
		let data: string | object;

		switch (typeof this.props.children) {

			case 'string':
				if( isJSON(this.props.children as string) ){
					data = JSON.parse( this.props.children as string );
				} else {
					data = this.props.children;
				}
				break;

			case 'number':
				data = this.props.children.toString();
				break;

			case 'object':
				data = this.props.children;
				break;

		}

		return data;
	}

	render(){
		const data: any = this.getData();

		return(
			<div
				className={['advanced-react-renderer', this.props.className].join(' ')}
				style={this.props.style}
			>

				{ typeof data === 'string' ? data : getContent(data) }

			</div>
		);
	}

}

export default Renderer
