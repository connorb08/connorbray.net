import { ActionFunction, json } from '@remix-run/cloudflare';

export const action: ActionFunction = async ({ request, context }) => {
	try {
		const env = context.cloudflare.env as Env;
		const bucket = env.CONTENT;

		const formData = await request.formData();
		const file = formData.get('file') as File | null;
		const width = formData.get('width') as string | null;
		const height = formData.get('height') as string | null;
		const category = formData.get('category') as string | null;

		if (!file || !width || !height || !category) {
			return json({ message: 'Invalid request' }, { status: 400 });
		}

		const fileKey = `${category}/${file.name}`;

		const res = await bucket.put(fileKey, file, {
			customMetadata: {
				width,
				height,
			},
		});

		return json({ message: `Upload ${res.key} successful` });
	} catch (error) {
		return json({ message: 'Upload failed' }, { status: 500 });
	}
};
