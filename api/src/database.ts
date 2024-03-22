const BaseRequest = (action: string, data: {}, env: Env) =>
	new Request(`${env.DATABASE_ENDPOINT}/action/${action}`, {
		method: 'POST',
		headers: {
			apiKey: env.MONGO_API_KEY,
			'Content-Type': 'application/json',
			'Access-Control-Request-Headers': '*',
		},
		body: JSON.stringify({
			dataSource: 'Cluster0',
			database: 'prod',
			...data,
		}),
	});

export const GetEmploymentHistory = async (env: Env) => {
	const response = await fetch(
		BaseRequest(
			'find',
			{
				collection: 'employment',
				projection: {
					_id: 1,
					company: 1,
					position: 1,
					description: 1,
					start_date: 1,
					end_date: 1,
					location: 1,
					icon_url: 1,
				},
			},
			env
		)
	);
	const data: any = await response.json();
	const documents = data.documents as Employment[];
	return documents;
};

export const GetEducationHistory = async (env: Env) => {
	const response = await fetch(
		BaseRequest(
			'find',
			{
				collection: 'education',
				projection: {
					_id: 1,
					school: 1,
					degree: 1,
					description: 1,
					start_date: 1,
					end_date: 1,
					location: 1,
					icon_url: 1,
				},
			},
			env
		)
	);
	const data: any = await response.json();
	const documents = data.documents as Employment[];
	return documents;
};
