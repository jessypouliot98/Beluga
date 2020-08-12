const AUTH_TOKEN = 'auth-token'

class Auth {

	protected _provider: any;

	constructor(provider: any) {
		this._provider = provider;
	}

	protected init() {
		this._provider.setProperty('$auth', this);
	}

	public login = (token: string, remember: boolean = true) => {
		if (!remember) {
			window.sessionStorage.setItem(AUTH_TOKEN, token);
			return;
		}

		window.localStorage.setItem(AUTH_TOKEN, token);
	}

	public check = () => {
		let authenticated: boolean;

		authenticated = !!window.localStorage.getItem(AUTH_TOKEN);

		if (!authenticated) {
			authenticated = !!window.sessionStorage.getItem(AUTH_TOKEN);
		}

		return authenticated
	}

}

export default Auth
