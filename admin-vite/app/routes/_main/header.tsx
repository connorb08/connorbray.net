import { Link } from '@remix-run/react';
import style from './style.module.css';
import { IconButton } from '@radix-ui/themes';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

export default function ({
	toggleNav,
}: React.PropsWithChildren<{ toggleNav: () => void }>) {
	return (
		<div className={style.Header}>
			<IconButton>
				<HamburgerMenuIcon width="18" height="18" onClick={toggleNav} />
			</IconButton>
			<span>
				<Link to="/">Home</Link>
			</span>
			<span></span>
		</div>
	);
}
