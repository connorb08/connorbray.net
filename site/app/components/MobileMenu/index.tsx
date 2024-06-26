import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';

import style from './style.module.scss';
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
		label: 'Architecture',
		href: '/architecture',
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

	const openMenu = () => {
		setMenuOpen(true);
		document.body.style.overflow = 'hidden';
	};
	const closeMenu = () => {
		// document.body.style.removeProperty('overflow');
		document.body.removeAttribute('style');
		setMenuOpen(false);
	};

	return (
		<div>
			<button
				className={style.IconButton}
				aria-label="Navigation menu"
				onClick={() => openMenu()}
			>
				<HamburgerMenuIcon />
			</button>
			{menuOpen && (
				<div className={style.MenuContent}>
					<div className={style.Heading}>
						<button
							className={style.IconButton}
							aria-label="Close Menu"
							onClick={() => closeMenu()}
						>
							<Cross1Icon />
						</button>
					</div>
					{menuLinks.map((link, index) => (
						<button
							onClick={() => closeMenu()}
							key={index}
							aria-label="Close Menu"
						>
							<Link
								key={link.label}
								to={link.href}
								className={style.MenuItem}
								prefetch="render"
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
