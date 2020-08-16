import React from 'react'
import BaseView, { BaseViewProps, BaseViewState } from '../../BaseView'
import { Form } from '../../../components/AdvancedReactInput'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

export interface IEditState extends BaseViewState {
	collection?: string,
	id?: string,
	data: any,
	loading: boolean,
}

class Edit extends BaseView<BaseViewProps, IEditState> {

	public static fetchContent(collection: string, id: string) {
		return axios.get(`http://localhost:8000/api/admin/v1/collection/${collection}/${id}/builder`);
	}

	public state = {
		id: this.props.match.params.id as string,
		collection: this.props.match.params.collection as string,
		data: null,
		loading: true,
	}

	componentDidMount() {
		this.load();
	}

	componentDidUpdate(prevProps: BaseViewProps) {
		if (prevProps.match.params.id != this.props.match.params.id) {
			this.load();
		}
	}

	protected load = async() => {
		this.setState({ data: null, loading: true });

		const id = this.props.match.params.id;
		const collection = this.props.match.params.collection;
		const resp = await this.fetchContent(collection, id);

		this.setState({
			id,
			collection,
			data: resp.data,
			loading: false,
		});
	}


	public render() {
		return (
			<React.Fragment>
				{ this.state.data && (
					<Form
						method={'post'}
						action={''}
						inputs={this.state.data}
					/>
				) }
			</React.Fragment>
		)
	}

}

export default withRouter<BaseViewProps, any>(Edit)
