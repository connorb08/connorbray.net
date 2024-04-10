const BaseRequest = (action, data, DATABASE_ENDPOINT, MONGO_API_KEY) =>
	new Request(`${DATABASE_ENDPOINT}/action/${action}`, {
		method: 'POST',
		headers: {
			apiKey: MONGO_API_KEY,
			'Content-Type': 'application/json',
			'Access-Control-Request-Headers': '*',
		},
		body: JSON.stringify({
			dataSource: 'Cluster0',
			database: 'prod',
			...data,
		}),
	});

const UpdateLOC = async (lines) => {
	const DATABASE_ENDPOINT = process.env.DATABASE_ENDPOINT;
	const MONGO_API_KEY = process.env.MONGO_API_KEY;
	const PROJECT_ID = process.env.PROJECT_ID;
	try {
		const response = await fetch(
			BaseRequest(
				'updateOne',
				{
					collection: 'projects',
					filter: {
						_id: { $oid: PROJECT_ID },
						stats: { $elemMatch: { name: 'Lines of code' } },
					},
					update: {
						$set: {
							'stats.$.value': lines,
						},
					},
				},
				DATABASE_ENDPOINT,
				MONGO_API_KEY
			)
		);
		const res = await response.json();
		console.log(res);
		return res;
	} catch (error) {
		console.error(error);
		return { error: 'Error updating stat' };
	}
};

const lines = process.argv[2];
UpdateLOC(lines);
