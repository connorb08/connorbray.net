import { redirect, type ActionFunctionArgs } from '@remix-run/cloudflare';
import {
	DeleteProject,
	InsertNewProject,
	PatchProject,
} from '~/database/projects';

export async function loader() {
	return redirect('/');
}

export async function action({ request, context }: ActionFunctionArgs) {
	const env = context.cloudflare.env as Env;
	const method = request.method;

	switch (method) {
		case 'PATCH':
			try {
				const data = (await request.json()) as Project;
				const projectId = data._id;
				if (projectId == null) {
					return new Response('Project ID not provided', {
						status: 400,
					});
				}
				delete data._id;
				const _result = await PatchProject(env, projectId, data);
				return new Response(null, { status: 204 });
			} catch (error) {
				console.error(error);
				return new Response('Error updating project', {
					status: 500,
				});
			}
		case 'PUT':
			try {
				const data = (await request.json()) as Project;
				const _result = await InsertNewProject(env, data);
				return new Response(null, { status: 204 });
			} catch (error) {
				console.error(error);
				return new Response('Error inserting project', {
					status: 500,
				});
			}
		case 'DELETE':
			try {
				const data = (await request.json()) as Project;
				console.log('Deleting project:', data._id);
				const projectId = data._id;
				if (projectId == null) {
					return new Response('Project ID not provided', {
						status: 400,
					});
				}
				const result = await DeleteProject(env, projectId);
				console.log(result);
				return new Response(null, { status: 204 });
			} catch (error) {
				console.error(error);
				return new Response('Error inserting project', {
					status: 500,
				});
			}
		default:
			return new Response('Method not allowed', {
				status: 405,
			});
	}
}
