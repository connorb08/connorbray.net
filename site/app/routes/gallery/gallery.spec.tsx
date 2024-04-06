import { expect, test } from 'vitest';
import { createRemixStub } from '@remix-run/testing';
import { render, screen } from '@testing-library/react';
import { json } from '@remix-run/cloudflare';
import { dev_data } from './dev_data';
import Gallery from './route';

test('renders gallery header', async () => {
	const RemixStub = createRemixStub([
		{
			path: '/',
			Component: Gallery,
			loader() {
				return json(dev_data);
			},
		},
	]);

	render(<RemixStub />);
	await screen.findByText('Gallery');
});
