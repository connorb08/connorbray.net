import type { IRequest } from 'itty-router';

const OWNER = 'connorb08';
const REPO = 'connorbray.net';

export const GitHubData = async (request: IRequest, env: Env) => {
	const GH_TOKEN = env.GH_TOKEN;

	const res = await fetch(
		`https://api.github.com/repos/${OWNER}/${REPO}/actions/runs?branch=main&event=push`,
		{
			headers: {
				'User-Agent': 'connorb08',
				Accept: 'application/vnd.github+json',
				Authorization: `Bearer ${GH_TOKEN}`,
				'X-GitHub-Api-Version': '2022-11-28',
			},
		}
	);
	const data: any = await res.json();
	const runs: object[] = [];

	for (const row of data.workflow_runs) {
		runs.push({
			name: row.name,
			status: row.status,
			conclusion: row.conclusion,
		});
	}

	return new Response(JSON.stringify(runs));
};
