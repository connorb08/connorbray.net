import { BaseRequest } from './base';

export async function PatchProject(
	env: Env,
	projectId: string,
	projectPatch: object
) {
	try {
		const response = await fetch(
			BaseRequest(
				'updateOne',
				{
					collection: 'projects',
					filter: {
						_id: { $oid: projectId },
					},
					update: {
						$set: projectPatch,
					},
				},
				env
			)
		);
		const res = await response.json();
		return res;
	} catch (error) {
		console.error(error);
		return { error: 'Error updating project' };
	}
}

export const InsertNewProject = async (env: Env, project: Project) => {
	const response = await fetch(
		BaseRequest(
			'insertOne',
			{
				collection: 'projects',
				document: {
					...project,
				},
			},
			env
		)
	);
	const data = await response.json();
	return data;
};

export const DeleteProject = async (env: Env, projectId: string) => {
	try {
		const response = await fetch(
			BaseRequest(
				'deleteOne',
				{
					collection: 'projects',
					filter: {
						_id: { $oid: projectId },
					},
				},
				env
			)
		);
		const res = await response.json();
		return res;
	} catch (error) {
		console.error(error);
		return { error: 'Error deleting project' };
	}
};
