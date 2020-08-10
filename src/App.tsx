import React from 'react'
import { AppContext } from './providers/AppProvider'
import { Input } from './components/AdvancedReactInput'
import './styles/app.scss'

class App extends React.Component {

	static contextType = AppContext;

	state = {
		password: '',
	}

	render() {
		return (
			<div className={'app'}>
				<div style={{ display: 'flex', flexWrap: 'wrap' }}>
					<Input
						type={'string'}
						name={'string'}
						label={'String'}
						placeholder={'Lorem Ipsum'}
						width={30}
						match={/a/}
						required={true}
					/>
					<Input
						type={'uint'}
						name={'number'}
						label={'Number'}
						placeholder={'123'}
						width={30}
					/>
					<Input
						type={'url'}
						name={'url'}
						label={'Url'}
						placeholder={'https://website.ca/'}
						width={40}
					/>
					<Input
						type={'tel'}
						name={'tel'}
						label={'Tel'}
						placeholder={'+1 (456) 654-4567'}
						width={50}
					/>
					<Input
						type={'email'}
						name={'email'}
						label={'Email'}
						placeholder={'email@domain.ca'}
						required={true}
						width={50}
					/>
					<Input
						type={'select'}
						name={'select'}
						label={'Select'}
						placeholder={'Options'}
						options={[
							{ label: 'A', value: 'a' },
							{ label: 'B', value: 'b' },
							{ label: 'C', value: 'c' },
						]}
						width={50}
					/>
					<Input
						type={'boolean'}
						name={'boolean'}
						label={'Boolean'}
						placeholder={'Boolean'}
						width={50}
					/>
					<Input
						type={'text'}
						name={'text'}
						label={'Text'}
						placeholder={'text'}
					/>
					<Input
						type={'checkbox'}
						name={'checkbox'}
						label={'Checkbox'}
						placeholder={'Options'}
						options={[
							{ label: 'A', value: 'a' },
							{ label: 'B', value: 'b' },
							{ label: 'C', value: 'c' },
						]}
						width={50}
					/>
					<Input
						type={'radio'}
						name={'radio'}
						label={'Radio'}
						placeholder={'Options'}
						options={[
							{ label: 'A', value: 'a' },
							{ label: 'B', value: 'b' },
							{ label: 'C', value: 'c' },
						]}
						width={50}
					/>
					<Input
						type={'password'}
						name={'password'}
						label={'Password'}
						placeholder={'Password'}
						width={50}
						match={[/^(\w|\W){7,15}$/, /[a-z]/, /[A-Z]/, /[0-9]/]}
						required={true}
						onChange={(value: string) => this.setState({ password: value })}
					/>
					<Input
						type={'password'}
						name={'password_confirmation'}
						label={'Password confirmation'}
						placeholder={'Password confirmation'}
						width={50}
						match={[new RegExp(`^${this.state.password}$`)]}
						required={true}
					/>
					<Input
						type={'color'}
						name={'color'}
						label={'Color'}
						placeholder={'#000000'}
						width={50}
						match={/^#[a-fA-f0-9]{6,}$/}
						required={true}
					/>
					<Input
						type={'datetime'}
						name={'date'}
						label={'Date'}
						placeholder={'Date'}
						width={50}
					/>
					<Input
						type={'wysiwyg'}
						name={'wysiwyg'}
						label={'Wysiwyg'}
						placeholder={'wysiwyg'}
					/>
				</div>
			</div>
		);
	}

}

export default App;
