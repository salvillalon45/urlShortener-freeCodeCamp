export const PORT = 3000;

export function isValidHttpUrl(urlInput: string) {
	try {
		const newUrl = new URL(urlInput);
		return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
	} catch (err) {
		return false;
	}
}
