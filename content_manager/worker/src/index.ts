import { Router } from '@tsndr/cloudflare-worker-router'
import { GetGalleryImage } from "./gallery";
import { GetImage } from "./images";

export interface Env {
	CM: R2Bucket;
}

const router = new Router<Env, ExecutionContext, Request>()

router.get("/gallery/:key", GetGalleryImage);
router.get("/images/:key", GetImage);

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		return router.handle(request, env, ctx)
	},
};
