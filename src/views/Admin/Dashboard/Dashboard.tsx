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
						input('string'),
						input('text'),
						input('wysiwyg'),
						input('number'),
						input('int'),
						input('uint'),
						input('password'),
						input('tel'),
						input('email'),
						input('url'),
						input('color'),
						input('range'),
						input('geo'),
						input('time'),
						input('date'),
						input('datetime'),
						input('select'),
						input('select', { multiple: true }),
						input('checkbox'),
						input('radio'),
						input('boolean'),
						input('group', { width: 100, fields: [
							input('string'),
							input('text'),
							input('wysiwyg'),
						] }),
						input('repeater', { width: 100, fields: [
							input('string', { width: 40 }),
							input('geo', { width: 60 }),
						] }),
						input('section'),
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
