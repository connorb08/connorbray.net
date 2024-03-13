import { HamburgerMenuIcon } from '@radix-ui/react-icons';

import style from './style.module.css';
import { useState } from 'react';
import { Link } from '@remix-run/react';

const menuLinks = [
	{
		label: 'Home',
		href: '/home',
	},
	{
		label: 'About Me',
		href: '/about',
	},
	{
		label: 'This Site',
		href: '/site',
	},
	{
		label: 'Photography',
		href: '/gallery',
	},
];

export default function MobileMenu() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div>
			<button
				className={style.IconButton}
				aria-label="Navigation menu"
				onClick={() => setMenuOpen(!menuOpen)}
			>
				<HamburgerMenuIcon />
			</button>
			{menuOpen && (
				<div className={style.MenuContent}>
					{menuLinks.map((link, index) => (
						<button onClick={() => setMenuOpen(false)} key={index}>
							<Link
								key={link.label}
								to={link.href}
								className={style.MenuItem}
							>
								{link.label}
							</Link>
						</button>
					))}
				</div>
			)}
		</div>
	);
}
