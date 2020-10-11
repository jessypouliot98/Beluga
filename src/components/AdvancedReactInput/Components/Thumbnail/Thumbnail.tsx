import React from 'react'

export type ThumbnailProps = {
	className?: string,
	style?: React.CSSProperties,
	title?: string,
	src?: string,
	alt?: string,
	onClick?: (e: React.MouseEvent) => void | Function,
}

class Thumbnail extends React.Component<ThumbnailProps, null> {

	public render() {
		return (
			<div className={['thumbnail', this.props.className].join(' ')}>
				<div className={'widescreen'}>
					<button
						className={'flex items-center justify-center overflow-hidden'}
						style={this.props.style}
						title={this.props.title}
						onClick={this.props.onClick}
					>

						{ this.props.src && (
							<img
								className={'block object-cover w-full h-full'}
								src={this.props.src}
								alt={this.props.alt}
							/>
						) }

						{ this.props.children }

					</button>
				</div>
			</div>
		)
	}

}

export default Thumbnail
