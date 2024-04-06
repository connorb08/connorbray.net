import { test } from 'vitest';
import { createRemixStub } from '@remix-run/testing';
import { render, screen, waitFor } from '@testing-library/react';
import Home from './route';

test('renders loader data', async () => {
	// ⚠️ This would usually be a component you import from your app code

	const RemixStub = createRemixStub([
		{
			path: '/',
			Component: Home,
		},
	]);

	render(<RemixStub />);

	await waitFor(() => screen.findByText('connorbray.net'));
});
