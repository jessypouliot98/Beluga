export function readFile(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.addEventListener('load', (event: any) => {
			resolve(event.target.result);
		});

		reader.readAsDataURL(file);
	});

}
