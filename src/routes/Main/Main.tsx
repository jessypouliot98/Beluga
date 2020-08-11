import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../../views/Dashboard/Dashboard'
import Login from '../../views/Login/Login'

class Main extends React.Component {

	public render() {
		return (
			<Switch>

				<Route to={'/login'} component={Login} />

				<Route to={'/'} component={Dashboard} />

			</Switch>
		)
	}

}

export default Main
