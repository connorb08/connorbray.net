import { Outlet } from '@remix-run/react';
import Header from './header';
import Navbar from './navbar';
import { useState } from 'react';

export default function () {
	const [navOpen, setNavOpen] = useState(false);
	const toggleNav = () => setNavOpen(!navOpen);

	return (
		<div className="h-full flex flex-col">
			<Header toggleNav={toggleNav} />
			<div className="flex-1 flex">
				<Navbar open={navOpen} />
				<div className="flex-1 flex flex-col">
					<Outlet />
				</div>
			</div>
		</div>
	);
}
