const DATABASE_ENDPOINT =
	'https://us-east-1.aws.data.mongodb-api.com/app/data-mmwij/endpoint/data/v1';
const MONGO_API_KEY = '';

const BaseRequest = (action: string, data: {}, context) =>
	new Request(`${DATABASE_ENDPOINT}/action/${action}`, {
		method: 'POST',
		headers: {
			apiKey: context.env.MONGO_API_KEY,
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify({
			dataSource: 'Cluster0',
			database: 'prod',
			...data,
		}),
	});

req('findOne', {
	collection: 'employment',
});
