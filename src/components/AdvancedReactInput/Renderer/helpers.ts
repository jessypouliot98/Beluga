import React from 'react'
import DomParser from 'dom-parser'

export function extractInlineFromText(text: string) {
	text = text.replace(/&nbsp;/gm, ' ');

	const parser = new DomParser();
	const doc = parser.parseFromString(`<div id="content">${text}</div>`).getElementById('content');

	const parseNodes = (nodes) => {
		return nodes.map((node, i) => {
			let type: string, data: any, attributes: any = {};

			type = node.nodeName;

			if( node.nodeName === '#text' ){
				type = 'text';
				data = node.text;
			} else {
				data = parseNodes(node.childNodes);
			}

			node.attributes.forEach((attr: { name: string, value: string }) => {
				attributes[attr.name] = attr.value;
			});

			return { type, data, attributes };
		});
	}

	const inline = parseNodes(doc.childNodes);

	return inline;
}

export function convertEditorJS(n: any) {
	const node = { ...n };

	switch (node.type) {

		case 'paragraph':
			node.type = 'p';
			break;

		case 'header':
			node.type = `h${node.data.level}`;
			break;

		case 'list':
			if(node.data.style === 'unordered') node.type = 'ul';
			else node.type = 'ol';
			node.data = node.data.items.map((item: any) => {
				return { type: 'li', data: item };
			})
			break;

	}

	if (node.data?.text) {
		node.data = extractInlineFromText(node.data.text);
	}

	return node;
}

export function getContent(data: any[], i: number = 0): any {
	if (data == undefined) {
		return null;
	}

	const content = data.map((node: any, j: number) => {
		node = convertEditorJS(node);

		if( node.type === 'text' ){
			return node.data
		}

		const type: string = node.type.toLowerCase();

		if (type === 'a') {
			node.attributes.target = '_blank';
		}

		const props = { ...node.attributes, key: `${i}-${j}` };
		const children = this.getContent(node.data, i++);

		return React.createElement(type, props, children);
	})

	return content;
}

export function isJSON(v: string): boolean {
	try{
		JSON.parse(v);
		return true;
	} catch(err){
		return false;
	}
}
