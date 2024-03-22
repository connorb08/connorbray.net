import { Router } from 'itty-router';
import { GetEmploymentHistory } from './database';

// now let's create a router (note the lack of "new")
const router = Router();

router.get('/api/cfinfo', async (request) => {
	return new Response(JSON.stringify(request.cf));
});

router.get(
	'/api/employment',
	async (request, env: Env, ctx: ExecutionContext) => {
		const data: Employment[] = await GetEmploymentHistory(env);
		return new Response(JSON.stringify(data));
	}
);

// 404 for everything else
router.all('*', () => new Response('Not Found.', { status: 404 }));

export default router;
