import { it, describe, expect } from 'vitest';
import { createRemixStub } from '@remix-run/testing';
import { render, screen } from '@testing-library/react';
import About, { loader } from './route';
import { json } from '@remix-run/cloudflare';

describe('About Page Loader Data', async () => {
	const RemixStub = createRemixStub([
		{
			path: '/',
			Component: About,
			loader() {
				return json({
					employment_data: [
						{
							_id: '65fd0bcc3ef1446d4c48198e',
							position: 'Kitchen Staff',
							company: 'Cumberland Foodstop',
							location: 'Cumberland, ME',
							start_date: 'Feb 2019',
							end_date: 'May 2021',
							description: '',
							icon_url:
								'https://content.connorbray.net/images/fstop.png',
							sort: 6,
						},
					],
					education_data: [
						{
							_id: '65fcb104da31477cdc618267',
							school: 'University of Maine',
							degree: 'B.S. Computer Science',
							description: 'Student Body President',
							location: 'Orono, ME',
							end_date: 'May 2023',
							icon_url:
								'https://content.connorbray.net/images/maine.png',
							start_date: 'August 2019',
						},
					],
					projects: [
						{
							_id: 'id',
							name: 'test_name',
							links: [],
							description: 'description',
							about: 'about',
							technologies: [],
							languages: [],
							stats: [],
						},
					] as Project[],
				});
			},
		},
	]);

	render(<RemixStub />);

	it('displays employment and education data', async () => {
		await screen.findByText(/Cumberland Foodstop/);
		await screen.findByText(/University of Maine/);
	});

	it('displays portfolio data', async () => {
		const portfolioTab = await screen.findByRole('button', {
			name: /Portfolio/,
		});
		portfolioTab.click();
		await screen.findByText(/test_name/);
	});

	it('displays leadership data', async () => {
		const leadershipTab = await screen.findByRole('button', {
			name: /Leadership/,
		});
		leadershipTab.click();
		await screen.findAllByText(/Board Member/);
	});

	it('Gets loader data', async () => {
		const res = await loader();
		const data = res.data;
		const employment_data = data.employment_data;
		const education_data = data.education_data;
		const projects = await data.projects;
		expect(employment_data[0].company).toBe('Tyler Technologies');
		expect(education_data[0].school).toBe('University of Maine');
		expect(projects[0].name).toBe('connorbray.net');
	});
});
