import { ActionFunction, json } from '@remix-run/cloudflare';

export const action: ActionFunction = async ({ request }) => {
	const formData = await request.formData();
	const file = formData.get('file') as Blob | null;
	const width = formData.get('width') as string | null;
	const height = formData.get('height') as string | null;

	if (!file || !width || !height) {
		return json({ message: 'Invalid request' }, { status: 400 });
	}

	console.log(file);
	console.log(width);
	console.log(height);

	return json({ message: 'Upload successful' });
};
