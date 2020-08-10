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

	getData = (): any => {
		let data: any;

		if( typeof this.props.children === 'string' ){
			if( isJSON(this.props.children as string) ){
				data = JSON.parse( this.props.children as string );
			} else {
				data = this.props.children;
			}
		} else if( this.props.children instanceof Object ){
			data = this.props.children;
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
