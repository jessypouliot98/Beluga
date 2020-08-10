const getAttributes = (node: any): any => {
	const attributes: any = {};

	if( node.tagName === 'A' ){
		attributes.href = node.attributes.href.value;
		attributes.target = '_blank';
	}

	const classList = getClassList(node);
	if( classList.length )
		attributes.className = classList.join(' ');

	return attributes;
}

const getClassList = (node: any): string[] => {
	if( node.classList == undefined )
		return[];

	return Array.from(node.classList)
				.map((className: string) => {
					return className.replace('ql-', 'ari-');
				});
}

const getData = (node: any) => {
	let data: any;
	const attributes: any = getAttributes(node);

	if( node.childNodes.length )
		data = Array.from(node.childNodes).map(getData);
	else
		data = node.nodeValue;

	return {
		type: node.tagName || 'text',
		attributes,
		data
	};
}

export const HTMLtoJSON = (html: string): string => {
	const body = document.createElement('div');
	body.innerHTML = html;

	const data = Array.from(body.children).map(getData)

	return JSON.stringify(data);
}
