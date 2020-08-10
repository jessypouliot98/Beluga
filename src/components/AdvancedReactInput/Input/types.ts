export type enumInput = 'string' | 'text' | 'wysiwyg' |
						'number' | 'int' | 'uint' | 'float' |
						'password' | 'tel' | 'email' | 'url' |
						'color' | 'range' | 'geo' |
						'time' | 'date' | 'datetime' |
						'select' | 'checkbox' | 'radio' | 'boolean' |
						'group' | 'repeater' | 'section' |
						'file' | 'image' | 'gallery' | 'video' | 'media' |
						'hidden';

export type option = { label: string, value: string|number };
