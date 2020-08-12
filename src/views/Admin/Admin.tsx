import React from 'react'
import AdminRouter from '../../routes/Admin/Admin'

class Admin extends React.Component {

	render() {
		return (
			<div className={'page page--admin'}>
				<AdminRouter />
			</div>
		);
	}

}

export default Admin;
