import router from "./router";
import { GenerateNewWord } from "./word";

export default {
	fetch: router.fetch,
	async scheduled(controller: ScheduledController, env: Env, ctx: ExecutionContext) {
		try {
			const return_code = await GenerateNewWord(env, ctx);
			if (return_code !== 0) {
				return new Response("Error", { status: 500 });
			}
			return new Response("Success", { status: 200 });
		} catch (error) {
			console.error(error);
			return new Response("Error", { status: 500 });
		}
	},
};
