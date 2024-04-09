import { redirect, type ActionFunctionArgs } from '@remix-run/cloudflare';
import { PatchProject } from '~/database/projects';

export async function action({ request, context }: ActionFunctionArgs) {
	const env = context.env as Env;
	const method = request.method;

	switch (method) {
		case 'GET':
			return redirect('/');
		case 'PATCH':
			try {
				const data = (await request.json()) as Project;
				console.log(data);
				const projectId = data._id;
				if (projectId == null) {
					return new Response('Project ID not provided', {
						status: 400,
					});
				}
				delete data._id;
				const result = await PatchProject(env, projectId, data);
				return redirect('/');
			} catch (error) {
				console.error(error);
				return new Response('Error updating project', {
					status: 500,
				});
			}

		default:
			return new Response('Method not allowed', {
				status: 405,
			});
	}
}
