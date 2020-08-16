import React from 'react'
import { AppProvider, AppContext } from '../providers/AppProvider'
import { RouteComponentProps } from 'react-router-dom'

export type BaseViewProps = RouteComponentProps<any>

export type BaseViewState = {}

abstract class BaseView<P extends BaseViewProps = BaseViewProps, S extends BaseViewState = BaseViewState> extends React.Component<P, S> {

	public static contextType = AppContext;

	public static fetchContent(...args: any): Promise<any> {
		return Promise.resolve();
	}

	protected fetchContent = (...args: any) => {
		return (this.constructor as any).fetchContent(...args);
	}

}

export default BaseView
