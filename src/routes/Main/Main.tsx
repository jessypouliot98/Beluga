import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AppContext } from '../../providers/AppProvider'
import Login from '../../views/Login/Login'
import Admin from '../../views/Admin/Admin'

class Main extends React.Component {

	public static contextType = AppContext

	public render() {
		return <Route path={''} component={Admin} />;

		return !this.context.$auth.check() ? (
			<Switch>
				<Route path={'/login'} component={Login} />
				<Redirect from={'/'} to={'/login'} />
			</Switch>
		) : (
			<Switch>
				<Route path={''} component={Admin} />
			</Switch>
		)
	}

}

export default Main
