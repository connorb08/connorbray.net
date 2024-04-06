import { useLocalStorage } from './hooks';
import { expect, test } from 'vitest';
import { createRemixStub } from '@remix-run/testing';
import { useEffect } from 'react';
import { screen, render } from '@testing-library/react';

test('useLocalStorage', () => {
	const TestComponent = () => {
		const [value, setValue] = useLocalStorage('test', 0);

		useEffect(() => {
			setValue(1);
		});
		return <>Value: {value}</>;
	};
	const RemixStub = createRemixStub([
		{
			path: '/',
			Component: TestComponent,
		},
	]);
	render(<RemixStub />);
	expect(screen.getByText(/Value/).textContent).toBe('Value: 1');
});
