import type { MetaFunction } from '@remix-run/cloudflare';
import { Outlet } from '@remix-run/react';
import HomeLayout from '~/components/HomeLayout';

export const meta: MetaFunction = () => {
	return [
		{ title: 'connorbray.net' },
		{
			name: 'description',
			content: 'My personal site.',
		},
	];
};

export default function Home() {
	return (
		<div className="h-full min-h-screen flex flex-col bg-primary-1">
			<HomeLayout>
				<Outlet />
			</HomeLayout>
		</div>
	);
}
