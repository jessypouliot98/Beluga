import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from '../../views/Admin/Dashboard/Dashboard'

class Admin extends React.Component {

	public render() {
		return (
			<Switch>

				<Route path={'/dashboard'} component={Dashboard} />

				<Redirect to={'/dashboard'} />

			</Switch>
		)
	}

}

export default Admin
