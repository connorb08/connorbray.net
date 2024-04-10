const BaseRequest = (action: string, data: object, env: Env) =>
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
					sort: 1,
				},
			},
			env
		)
	);
	const data = (await response.json()) as unknown as {
		documents: Employment[];
	};
	const documents = data.documents as Employment[];
	return documents.sort((a, b) => a.sort - b.sort);
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
	const data = (await response.json()) as unknown as {
		documents: Education[];
	};
	const documents = data.documents;
	return documents;
};

export const GetProjectByID = async (env: Env, projectId: string) => {
	const response = await fetch(
		BaseRequest(
			'findOne',
			{
				collection: 'projects',
				filter: {
					_id: { $oid: projectId },
				},
				projection: {
					_id: 1,
					name: 1,
					description: 1,
					about: 1,
					languages: 1,
					stats: 1,
					technologies: 1,
					links: 1,
				},
			},
			env
		)
	);
	const data = (await response.json()) as unknown as { document: Project };
	const document = data.document;
	return document;
};

export const GetProjects = async (env: Env) => {
	const response = await fetch(
		BaseRequest(
			'find',
			{
				collection: 'projects',
				projection: {
					_id: 1,
					name: 1,
					description: 1,
					about: 1,
					languages: 1,
					stats: 1,
					technologies: 1,
					links: 1,
				},
			},
			env
		)
	);
	const data = (await response.json()) as unknown as { documents: Project[] };
	const documents = data.documents as Project[];
	return documents;
};
