export const PORT = 3000;

// export function isUrlValid(urlInput: string) {
// 	try {
// 		console.log({ urlInput });
// 		new URL(urlInput);
// 		return true;
// 	} catch (err) {
// 		return false;
// 	}
// }

export function isValidHttpUrl(urlInput: string) {
	try {
		const newUrl = new URL(urlInput);
		return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
	} catch (err) {
		return false;
	}
}
