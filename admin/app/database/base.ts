export const BaseRequest = (action: string, data: object, env: Env) =>
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
