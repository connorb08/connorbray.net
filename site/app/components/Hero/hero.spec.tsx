import { render, screen } from '@testing-library/react';
import Hero from './index';
import { describe, expect, it } from 'vitest';
import { createRemixStub } from '@remix-run/testing';

describe('Hero component', () => {
	it('renders the navigation links', () => {
		const RemixStub = createRemixStub([
			{
				path: '/',
				Component: Hero,
			},
		]);
		render(<RemixStub />);

		const homeLink = screen.getByText('home');
		const aboutLink = screen.getByText('portfolio');
		const galleryLink = screen.getByText('photo gallery');

		expect(homeLink).toBeTruthy();
		expect(aboutLink).toBeTruthy();
		expect(galleryLink).toBeTruthy();
	});
});
