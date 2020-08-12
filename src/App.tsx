import React from 'react'
import { AppContext } from './providers/AppProvider'
import MainRouter from './routes/Main/Main'
import './styles/app.scss'

class App extends React.Component {

	static contextType = AppContext;

	render() {
		return (
			<div className={'app'}>
				<MainRouter />
			</div>
		);
	}

}

export default App;
