import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createRemixStub } from '@remix-run/testing';
import HomePage from './route';

describe('Home Page', () => {
	const RemixStub = createRemixStub([
		{
			path: '/',
			Component: HomePage,
		},
	]);

	render(<RemixStub />);

	it('displays page', async () => {
		await screen.findByText(/Connor Bray/);
	});
});
