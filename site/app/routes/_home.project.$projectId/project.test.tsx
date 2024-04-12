import { describe, expect, it, test } from 'vitest';
import { createRemixStub } from '@remix-run/testing';
import { render, screen } from '@testing-library/react';
import Project, { loader } from './route';

test('Renders loader data', async () => {
	const RemixStub = createRemixStub([
		{
			path: '/',
			Component: Project,
			loader: async () => {
				return {
					project: {
						_id: '6610cdec02e34801eeac0716',
						name: 'connorbray.net',
						description:
							'Suite of microservices including personal website of Connor Bray.',
						about: 'xxx',
						languages: [{ name: 'TypeScript' }],
						stats: [
							{
								name: 'lines of code',
								value: '4742',
								unit: 'lines',
							},
						],
						technologies: [
							{
								name: 'cloudflare',
								logoSrc:
									'https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg',
							},
						],
						links: [],
					},
				};
			},
		},
	]);

	render(<RemixStub />);

	await screen.findByText('TypeScript');
});

describe('Project loader', () => {
	it('returns the project data', async () => {
		const res = await loader({
			request: new Request(
				'https://api.connorbray.net/projects/6610cdec02e34801eeac0716'
			),
			params: { projectId: '6610cdec02e34801eeac0716' },
			context: {},
		});
		const data = (await res.json()) as { project: Project };
		expect(data.project.name).toEqual('connorbray.net');
	});
});
