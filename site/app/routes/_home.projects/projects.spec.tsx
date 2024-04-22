import { describe, expect, it } from 'vitest';
import Projects, { loader } from './route';
import { createRemixStub } from '@remix-run/testing';
import { render, screen } from '@testing-library/react';

describe('Projects Page', () => {
	const RemixStub = createRemixStub([
		{
			path: '/',
			Component: Projects,
			loader: async () => {
				return {
					projects: [
						{
							_id: '1',
							name: 'Project 1',
							description: 'This is project 1',
							languages: [{ name: 'TypeScript' }],
							links: [],
						},
					],
					error: null,
				};
			},
		},
	]);

	render(<RemixStub />);

	it('should render the loader data', async () => {
		expect(1).toBe(1);
		await screen.findByText(/Project 1/);
	});

	it('should get project data from loader', async () => {
		const res = (await loader()) as Response;
		const data = (await res.json()) as {
			projects: Project[] | null;
			error: string | null;
		};
		if (data.error || data.projects == null) {
			throw new Error(data.error || 'Error occured');
		}
		expect(data.projects[1].name).toBe('crun');
	});
});
