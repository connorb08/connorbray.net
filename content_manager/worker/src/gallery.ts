import { RouterHandler } from "@tsndr/cloudflare-worker-router";
import { Env } from ".";

export const GetGalleryImage: RouterHandler<Env, ExecutionContext, Request<unknown, CfProperties<unknown>>> = async ({ env, ctx, req }) => {

    try {

        const url = new URL(req.url);
        const cacheKey = new Request(url.toString(), req);
        const cache = caches.default;

        let response = await cache.match(cacheKey);
        if (response) {
            return response;
        }

        const objectKey = `gallery/${req.params.key}`;
        console.log(objectKey)
        const object = await env.CM.get(objectKey);
        if (object === null) {
            return new Response('NOT FOUND', { status: 404 });
        }

        const headers = new Headers();
        object.writeHttpMetadata(headers);
        headers.set('etag', object.httpEtag);
        // 1 week cache
        headers.append('Cache-Control', 's-maxage=604800');

        response = new Response(object.body, {
            headers,
        });

        if (ctx) {
            ctx.waitUntil(cache.put(cacheKey, response.clone()));
        } else {
            await cache.put(cacheKey, response.clone())
        }

        return response;

    } catch (e: any) {
        console.log(e.message);
        return new Response('Error', { status: 500 });
    }

}