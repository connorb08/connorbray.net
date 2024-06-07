import type { LoaderFunction, LoaderFunctionArgs } from '@remix-run/cloudflare';

export const loader: LoaderFunction = async ({
	request,
	context,
	params,
}: LoaderFunctionArgs) => {
	try {
		// Get context
		// console.log(context);
		const env = context.cloudflare.env as Env;
		const ctx = context.cloudflare.ctx as ExecutionContext;
		const cache = context.cloudflare.caches.default as Cache;

		// Check cache
		const url = new URL(request.url);
		const cacheKey = new Request(url.toString(), request);
		const cachedResponse = await cache.match(cacheKey);
		if (cachedResponse) {
			return cachedResponse;
		}

		// Get object
		const objectKey = params['*'];
		if (!objectKey) {
			return new Response('Bad Request', { status: 400 });
		}

		const object = await env.CONTENT.get(objectKey);

		if (object === null) {
			return new Response('Resource Not Found', { status: 404 });
		}

		// Headers
		const headers = new Headers();
		object.writeHttpMetadata(headers);
		headers.set('etag', object.httpEtag);
		// 1 week cache
		// 1 year cache
		// headers.append('Cache-Control', 'maxage=31536000');
		headers.append('Cache-Control', 'max-age=31536000, s-maxage=31536000');

		const response = new Response(object.body, {
			headers,
		});

		if (ctx) {
			ctx.waitUntil(cache.put(cacheKey, response.clone()));
		} else {
			console.log('await');
			await cache.put(cacheKey, response.clone());
		}

		return response;
	} catch (error) {
		return new Response('Error Fetching Content', {
			status: 500,
		});
	}
};
