import React from 'react'

const Context = React.createContext({});
const { Consumer } = Context;

export type AppProviderProps = {

}

export type AppProviderState = {
	loading: boolean,
}

class AppProvider extends React.Component<AppProviderProps, AppProviderState> {

	state = {
		loading: true,
	};

	componentDidMount(){
		this.init();
	}

	private async init(): Promise<void> {
		this.setState({ loading: false });
	}

	render() {
		return (
			<Context.Provider value={{
				state: {},
				$auth: {
					check: () => false,
					user: () => null,
				},
			}}>
				{ !this.state.loading && (
					this.props.children
				) }
			</Context.Provider>
		);
	}

}

export { AppProvider, Consumer as AppConsumer, Context as AppContext };
