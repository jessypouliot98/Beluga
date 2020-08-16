import React from 'react'
import { Link } from 'react-router-dom'

export type NavBarProps = {
	links: any[],
}

class NavBar extends React.Component<NavBarProps> {

	public render() {
		return (
			<aside className={'navbar | bg-gray-800 h-screen p-5'}>
				<nav className={'nav | flex flex-col'}>
					{ this.props.links.map((link, i) => (
						<Link key={i} to={link.to}>{link.name}</Link>
					))}
				</nav>
			</aside>
		)
	}

}

export default NavBar
