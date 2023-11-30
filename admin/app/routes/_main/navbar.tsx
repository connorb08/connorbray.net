import { Box } from '@radix-ui/themes';
import style from './style.module.css';
import React from 'react';

export default function ({ open }: React.PropsWithChildren<{ open: boolean }>) {
	return <div className={style.Navbar + (open ? '' : ' hidden')}>Navbar</div>;
}
