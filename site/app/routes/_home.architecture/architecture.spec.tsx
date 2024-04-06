import { expect, test } from 'vitest';
import { createRemixStub } from '@remix-run/testing';
import { render, screen } from '@testing-library/react';
import Architecture, { meta } from './route';

test('displays data', async () => {
	const RemixStub = createRemixStub([
		{
			path: '/',
			Component: Architecture,
			meta: meta,
		},
	]);

	render(<RemixStub />);

	expect(
		screen.getByText('Website').parentElement?.parentElement?.children[1]
			.textContent
	).toBe('Serverless progressive web app built with Remix and React.');

	expect(
		screen.getByText('Terraform').parentElement?.children[1].textContent
	).toBe('Terraform configuration to manage cloud resources.');

	expect(screen.getByText('API').parentElement?.children[1].textContent).toBe(
		'Serverless API written in TypeScript and served on the edge.'
	);
});
