import React from 'react'
import BaseView from '../../BaseView'
import { Input } from '../../../components/AdvancedReactInput'

class Settings extends BaseView {

	public render() {
		return (
			<div>
				<Input type={'string'} name={'siteName'} label={'Site name'} placeholder={'Beluga app'} />
				<Input type={'string'} name={'timezone'} label={'Timezone'} placeholder={''} />
				<Input type={'radio'} name={'weekStart'} label={'Week starts on'} options={[
					{ label: 'Sunday', value: 'sunday'},
					{ label: 'Monday', value: 'monday'},
				]} value={'monday'}/>
				<Input type={'string'} name={'dateFormat'} label={'Date format'} />
				<Input type={'string'} name={'timeFormat'} label={'Time format'} />
			</div>
		)
	}

}

export default Settings
