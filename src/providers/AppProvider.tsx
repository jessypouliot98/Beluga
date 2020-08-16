import React from 'react'
import Auth from '../plugins/Auth'
import axios from 'axios'

const Context = React.createContext({});
const { Consumer } = Context;

export type AppProviderProps = {

}

export type AppProviderState = {
	plugins: any[],
	properties: any,
	loading: boolean,
	mainMenu: any[],
}

class AppProvider extends React.Component<AppProviderProps, AppProviderState> {

	state = {
		plugins: [],
		properties: {},
		mainMenu: [],
		loading: true,
	};

	async componentDidMount(){
		this.use(Auth);

		const resp = await axios.get(`http://localhost:8000/api/admin/v1/mainMenu`);

		this.setState({
			mainMenu: resp.data,
			loading: false,
		});
	}

	protected use = (plugin: any): void => {
		const pluginInstance = new plugin(this);
		pluginInstance.init();

		this.setState(prevState => ({
			plugins: [...prevState.plugins, pluginInstance]
		}));
	}

	public setProperty = (property: string, value: any) => {
		this.setState(prevState => ({
			properties: {...prevState.properties, [property]: value}
		}));
	}

	render() {
		return (
			<Context.Provider value={{
				...this.state.properties,
				mainMenu: this.state.mainMenu,
			}}>
				{ !this.state.loading && (
					this.props.children
				) }
			</Context.Provider>
		);
	}

}

export { AppProvider, Consumer as AppConsumer, Context as AppContext };
