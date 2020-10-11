import React from 'react'
import BaseView from '../../BaseView'
import { Form } from '../../../components/AdvancedReactInput'

function input(type = 'string', params?: any): any {
	const prop = {
		type: type,
		label: type,
		placeholder: type,
		value: 1,
		width: 33.33,
		options: [
			{ label: 'A', value: 'a' },
			{ label: 'B', value: 'b' },
			{ label: 'C', value: 'c' },
		],
		...params,
	};

	return prop;
}

class Dashboard extends BaseView {

	public render() {
		return (
			<React.Fragment>

				<h1>Dashboard</h1>

				<Form
					action={''}
					inputs={[
						input('file'),
						input('image'),
						input('gallery'),
						input('video'),
						input('media'),
						input('hidden'),
					]}
				/>

			</React.Fragment>
		)
	}

}

export default Dashboard
