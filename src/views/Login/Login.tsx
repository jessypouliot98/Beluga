import React from 'react'
import { AppContext } from '../../providers/AppProvider'
import BaseView, { BaseViewProps, BaseViewState } from '../BaseView'
import { Form } from '../../components/AdvancedReactInput'
import './style.scss'

export interface ILoginState extends BaseViewState {
	remember: boolean
}

class Login extends BaseView<BaseViewProps, ILoginState> {

	public static contextType = AppContext;

	public state = {
		remember: false,
	}

	public render() {
		return (
			<div className={'page page--login | bg-gray-700 h-screen flex flex-col justify-center items-center p-3'}>

				<h1 className={'text-3xl text-white mb-5 -mt-5'}>Beluga</h1>

				<div className={'card | bg-gray-200 p-5 w-full shadow-md rounded-md'}>
					<Form
						className={'form | w-full'}
						method={'post'}
						action={'http://localhost:8000/api/v1/auth/login'}
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
							}, {
								type: 'boolean',
								name: 'remember',
								placeholder: 'Remember me ?',
								className: 'input-rember',
								onChange: (remember) => this.setState({ remember }),
							}
						]}
						callback={(resp) => {
							if (resp instanceof Error) {
								return;
							}

							this.context.$auth.login(resp.data, this.state.remember);
						}}
					/>
				</div>

				<div className={'card | w-full px-5 mt-2 text-white'}>
					<a href="/">{'<'} Back to website.</a>
				</div>

			</div>
		)
	}

}

export default Login
