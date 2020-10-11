import React from 'react'
import { BaseInputProps, BaseInputState } from './BaseInput/BaseInput'
import InputString from './InputString/InputString'
import InputText from './InputText/InputText'
import InputWysiwyg from './InputWysiwyg/InputWysiwyg'
import InputNumber from './InputNumber/InputNumber'
import InputPassword from './InputPassword/InputPassword'
import InputTel from './InputTel/InputTel'
import InputEmail from './InputEmail/InputEmail'
import InputUrl from './InputUrl/InputUrl'
import InputColor from './InputColor/InputColor'
import InputRange from './InputRange/InputRange'
import InputGeo from './InputGeo/InputGeo'
import InputDateTime from './InputDateTime/InputDateTime'
import InputSelect from './InputSelect/InputSelect'
import InputCheckbox from './InputCheckbox/InputCheckbox'
import InputRadio from './InputRadio/InputRadio'
import InputBoolean from './InputBoolean/InputBoolean'
import InputGroup from './InputGroup/InputGroup'
import InputRepeater from './InputRepeater/InputRepeater'
import InputSection from './InputSection/InputSection'
import InputFile from './InputFile/InputFile'
import InputGallery from './InputGallery/InputGallery'
import InputMedia from './InputMedia/InputMedia'
import InputHidden from './InputHidden/InputHidden'

class Input extends React.Component<BaseInputProps, BaseInputState> {

	render(){
		const { type, ...props } = this.props;

		switch (type) {
			case 'string':
				return <InputString {...props} />

			case 'text':
				return <InputText {...props} />

			case 'wysiwyg':
				return <InputWysiwyg {...props} />

			case 'number':
				return <InputNumber {...props} type={'number'} />

			case 'int':
				return <InputNumber {...props} type={'int'} />

			case 'uint':
				return <InputNumber {...props} type={'uint'} />

			case 'float':
				return <InputNumber {...props} type={'float'} />

			case 'password':
				return <InputPassword {...props} />

			case 'tel':
				return <InputTel {...props} />

			case 'email':
				return <InputEmail {...props} match={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/} />

			case 'url':
				return <InputUrl {...props} />

			case 'color':
				return <InputColor {...props} />

			case 'range':
				return <InputRange {...props} />

			case 'geo':
				return <InputGeo {...props} />

			case 'time':
				return <InputDateTime {...props} type={'time'} />

			case 'date':
				return <InputDateTime {...props} type={'date'} />

			case 'datetime':
				return <InputDateTime {...props} type={'datetime'} />

			case 'select':
				return <InputSelect {...props} />

			case 'checkbox':
				return <InputCheckbox {...props} />

			case 'radio':
				return <InputRadio {...props} />

			case 'boolean':
				return <InputBoolean {...props} />

			case 'group':
				return <InputGroup {...props as any} />

			case 'repeater':
				return <InputRepeater {...props as any} />

			case 'section':
				return <InputSection {...props} />

			case 'file':
				return <InputFile {...props} />

			case 'gallery':
				return <InputGallery {...props} />

			case 'image':
				return <InputMedia {...props} type={'image'} />

			case 'video':
				return <InputMedia {...props} type={'video'} />

			case 'media':
				return <InputMedia {...props} />

			case 'hidden':
				return <InputHidden {...props} />

			default:
				return null;
		}
	}

}

export default Input
