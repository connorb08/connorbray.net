export const GetResume: RouterHandler<
	Env,
	ExecutionContext,
	Request<unknown, CfProperties<unknown>>
> = async ({ env, ctx, req }) => {
	try {
		const resumeKey = `dist/resume.pdf`;
		const object = await env.CM.get(resumeKey);
		if (object === null) {
			return new Response('NOT FOUND', { status: 404 });
		}

		const headers = new Headers();
		object.writeHttpMetadata(headers);
		headers.set('etag', object.httpEtag);
		headers.append('content-type', 'application/pdf');

		const response = new Response(object.body, {
			headers,
		});

		return response;
	} catch (error) {
		console.log(error);
		return new Response('Error', { status: 500 });
	}
};
