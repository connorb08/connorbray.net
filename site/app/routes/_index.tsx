import type { MetaFunction } from '@remix-run/cloudflare';
import Hero from '~/components/Hero';

export const meta: MetaFunction = () => {
	return [
		{ title: 'connorbray.net' },
		{
			name: 'description',
			content: 'My personal site',
		},
	];
};

export default function Index() {
	return (
		<>
			<Hero />
		</>
	);
}
