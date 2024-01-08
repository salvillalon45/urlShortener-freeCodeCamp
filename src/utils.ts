export const PORT = 3000;

export function isUrlValid(urlInput: string) {
	try {
		new URL(urlInput);
		return true;
	} catch (err) {
		return false;
	}
}
