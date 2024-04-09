import { Router } from 'itty-router';
import {
	GetEducationHistory,
	GetEmploymentHistory,
	GetProjectByID,
	GetProjects,
} from './database';
import { GitHubData } from './github';

// now let's create a router (note the lack of "new")
const router = Router();

router.get('/api/cfinfo', async (request) => {
	return new Response(JSON.stringify(request.cf));
});

router.get('/api/ghinfo', GitHubData);

router.get('/api/employment', async (request, env: Env) => {
	const data: Employment[] = await GetEmploymentHistory(env);
	return new Response(JSON.stringify(data));
});

router.get('/api/education', async (request, env: Env) => {
	const data: Employment[] = await GetEducationHistory(env);
	return new Response(JSON.stringify(data));
});

router.get('/api/projects', async (request, env: Env) => {
	const data: Project = await GetProjects(env);
	return new Response(JSON.stringify(data));
});

router.get('/api/project/:projectId', async (request, env: Env) => {
	console.log(request.params.projectId);
	const data: Project = await GetProjectByID(env, request.params.projectId);
	return new Response(JSON.stringify(data));
});

// 404 for everything else
router.all('*', () => new Response('Not Found.', { status: 404 }));

export default router;
