import React from 'react'
import BaseInput from '../BaseInput/BaseInput'
import Renderer from '../../Renderer/Renderer'
import { HTMLtoJSON } from './helpers'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

class InputWysiwyg extends BaseInput {

	public static type = 'wysiwyg';

	protected _quill: any;
	protected _editor = React.createRef<HTMLDivElement>();

	public state = {
		value: this.props.value || '',
	}

	componentDidMount(){
		this._quill = new Quill(this._editor.current, {
			theme: 'snow',
			modules: {
				toolbar: [
					[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
					[{ 'list': 'ordered'}, { 'list': 'bullet' }],
					['bold', 'italic', 'underline', 'strike', 'link'],
					[{ align: [] }],
					['blockquote', 'code-block'],
				]
			},
			placeholder: this.props.placeholder || '',
		});

		this._quill.on('text-change', () => {
			const content = this._quill.root.innerHTML;
			const value = HTMLtoJSON(content);

			this.updateValue(value);
		})
	}

	updateValue = (value: any) => {
		this.setState({ value });

		if( typeof this.props.onChange === 'function' ){
			this.props.onChange(value, this.props.name)
		}
	}

	public render() {
		return this.container(
			<div ref={this._editor} className={'is-field-wysiwyg'}>
				<Renderer>{this.state.value}</Renderer>
			</div>
		);
	}

}

export default InputWysiwyg
