import { describe, expect, it } from 'vitest';
import { createRemixStub } from '@remix-run/testing';
import { render, screen } from '@testing-library/react';
import { json } from '@remix-run/cloudflare';
import { dev_data } from './dev_data';
import Gallery, { loader } from './route';

describe('Gallery Page', () => {
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

	it('renders gallery header', async () => {
		await screen.findByText('Gallery');
	});

	it('gets loader data', async () => {
		const res = await loader({
			request: new Request('https://connorbray.net/gallery'),
			params: {},
			context: {
				env: {
					CONTENT: {
						list: async () => {
							return {
								objects: [
									{
										size: 1,
										customMetadata: {
											height: 1,
											width: 1,
										},
										key: 'gallery/1.jpg',
									},
								],
							};
						},
					},
				},
			},
		});
		const data = await res.json();
		const src = data.data[0].src;
		expect(src).toContain('cdn-cgi/image');
	});
});
