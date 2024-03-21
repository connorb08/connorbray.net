import type { PropsWithChildren } from 'react';
import { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';

export default function Layout(props: PropsWithChildren) {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	return (
		<div className="flex flex-1">
			<div className="hidden sm:block">
				<Navigation
					sidebarOpen={sidebarOpen}
					setSidebarOpen={setSidebarOpen}
				/>
			</div>
			<div className="flex flex-1 flex-col">
				<Header />
				<main className="flex-1">{props.children}</main>
			</div>
		</div>
	);
}
