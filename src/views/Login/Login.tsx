import React from 'react'
import BaseView from '../BaseView'
import { Form } from '../../components/AdvancedReactInput'

class Login extends BaseView {

	public render() {
		return (
			<Form
				className={'myForm'}
				method={'get'}
				action={'http://localhost:8000/api/v1/user'}
				inputs={[
					{
						type: 'email',
						name: 'email',
						label: 'Email',
						placeholder: 'Enter your email address',
						required: true,
					}, {
						type: 'password',
						name: 'password',
						label: 'password',
						placeholder: 'Enter your password',
						required: true,
					}
				]}
				callback={(resp) => console.log(resp)}
			/>
		)
	}

}

export default Login
