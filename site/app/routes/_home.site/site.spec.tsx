import { createRemixStub } from '@remix-run/testing';
import { render, screen } from '@testing-library/react';
import { test } from 'vitest';
import Site from './route';

test('displays info about site', async () => {
	const RemixStub = createRemixStub([
		{
			path: '/',
			Component: Site,
		},
	]);

	render(<RemixStub />);

	await screen.findByText(/runs on the edge/);
});
