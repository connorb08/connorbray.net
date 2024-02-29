import { Box, Grid } from '@radix-ui/themes';
import { Link } from '@remix-run/react';
import style from './style.module.css';

export default function Index() {
	return (
		<Grid columns="2" gap="3" width="auto" className={style.Grid}>
			<Box className={style.Box}>
				<Link to="/content">Content</Link>
			</Box>
			<Box className={style.Box}>
				<Link to="/content">Content</Link>
			</Box>
			<Box className={style.Box}>
				<Link to="/content">Content</Link>
			</Box>
			<Box className={style.Box}>
				<Link to="/content">Content</Link>
			</Box>
		</Grid>
	);
	return;
}
