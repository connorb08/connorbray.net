import { Router } from '@tsndr/cloudflare-worker-router'
import { GetAllImages, GetImageByKey as GetGalleryImageByKey } from "./gallery";
import { GetImageByKey } from "./images";

export interface Env {
	CM: R2Bucket;
}

const router = new Router<Env, ExecutionContext, Request>()

router.get("/gallery", GetAllImages);
router.get("/gallery/:key", GetGalleryImageByKey);
router.get("/images/:key", GetImageByKey);

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		return router.handle(request, env, ctx)
	},
};
