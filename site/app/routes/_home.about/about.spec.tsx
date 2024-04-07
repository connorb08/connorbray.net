import { it, describe } from 'vitest';
import { createRemixStub } from '@remix-run/testing';
import { render, screen } from '@testing-library/react';
import About from './route';
import { json } from '@remix-run/cloudflare';

// test('displays my name', async () => {
// 	const RemixStub = createRemixStub([
// 		{
// 			path: '/',
// 			Component: About,
// 			loader() {
// 				return json({
// 					employment_data: [],
// 					education_data: [],
// 				});
// 			},
// 		},
// 	]);

// 	render(<RemixStub />);

// 	await waitFor(() => screen.findByText(/Connor Bray/));
// });

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
		await screen.findByText(/Web Application/);
	});

	it('displays leadership data', async () => {
		const leadershipTab = await screen.findByRole('button', {
			name: /Leadership/,
		});
		leadershipTab.click();
		await screen.findAllByText(/Board Member/);
	});
});
