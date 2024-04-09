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

export const UpdateProjectStat = async (
	env: Env,
	projectId: string,
	{ name, value, unit }: { name: string; value: string; unit: string }
) => {
	try {
		const response = await fetch(
			BaseRequest(
				'updateOne',
				{
					collection: 'projects',
					filter: {
						_id: { $oid: projectId },
						stats: { $elemMatch: { name } },
					},
					update: {
						$set: {
							'stats.$.value': value,
							'stats.$.unit': unit,
						},
					},
				},
				env
			)
		);
		const res = await response.json();
		return res;
	} catch (error) {
		console.error(error);
		return { error: 'Error updating stat' };
	}
};
