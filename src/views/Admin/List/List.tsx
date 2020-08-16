import React from 'react'
import BaseView, { BaseViewProps, BaseViewState } from '../../BaseView'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'

export interface IListState extends BaseViewState {
	collection?: string,
	data: any,
	loading: boolean,
}

class List extends BaseView<BaseViewProps, IListState> {

	public static fetchContent(collection: string) {
		return axios.get(`http://localhost:8000/api/admin/v1/collection/${collection}`);
	}

	public state = {
		collection: this.props.match.params.collection as string,
		data: null,
		loading: true,
	}

	componentDidMount() {
		this.load();
	}

	componentDidUpdate(prevProps: BaseViewProps) {
		if (prevProps.match.params.collection != this.props.match.params.collection) {
			this.load();
		}
	}

	protected load = async() => {
		this.setState({ data: null, loading: true });

		const collection = this.props.match.params.collection;
		const resp = await this.fetchContent(collection);

		this.setState({
			collection,
			data: resp.data,
			loading: false,
		});
	}


	public render() {
		if (this.state.loading) {
			return null;
		}

		return (
			<React.Fragment>
				{ (this.state.data || []).map(entry => {
					return (
						<div key={entry.id}>
							<Link to={`/collection/${this.state.collection}/${entry.id}`}>
								<h2>{entry.email}</h2>
							</Link>
						</div>
					)
				})}
			</React.Fragment>
		)
	}

}

export default withRouter<BaseViewProps, any>(List)
