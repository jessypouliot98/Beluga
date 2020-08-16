import React from 'react'
import AdminRouter from '../../routes/Admin/Admin'
import NavBar from '../../components/NavBar/NavBar'
import BaseView, { BaseViewProps } from '../BaseView'
import { withRouter } from 'react-router-dom'

class Admin extends BaseView<BaseViewProps> {

	protected get pageClasses(): string {
		const paths = this.props.location.pathname.split('/').filter(path => path !== '');

		return paths.map(path => `page--${path}`).join(' ');
	}

	render() {
		return (
			<div className={`page page--admin ${this.pageClasses} | flex`}>

				<NavBar links={this.context.mainMenu} />

				<main className={'main | flex-grow p-5'}>
					<AdminRouter />
				</main>

			</div>
		);
	}

}

export default withRouter(Admin);
