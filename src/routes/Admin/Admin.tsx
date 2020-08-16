import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from '../../views/Admin/Dashboard/Dashboard'
import List from '../../views/Admin/List/List'
import Edit from '../../views/Admin/Edit/Edit'
import Settings from '../../views/Admin/Settings/Settings'

class Admin extends React.Component {

	public render() {
		return (
			<Switch>

				<Route path={'/dashboard'} exact component={Dashboard} />
				<Route path={'/collection/:collection'} exact component={List} />
				<Route path={'/collection/:collection/:id'} exact component={Edit} />
				<Route path={'/settings'} exact component={Settings} />

				<Redirect to={'/dashboard'} />

			</Switch>
		)
	}

}

export default Admin
