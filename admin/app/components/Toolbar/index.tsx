import { EyeOpenIcon, Pencil1Icon, UploadIcon } from '@radix-ui/react-icons';
import style from './style.module.css';
import { IconButton } from '@radix-ui/themes';
export default function Toolbar() {
	return (
		<div className={style.Toolbar}>
			<IconButton size="4" radius="full" variant="ghost">
				<UploadIcon />
			</IconButton>
			<IconButton size="4" radius="full" variant="ghost">
				<Pencil1Icon />
			</IconButton>
			<IconButton size="4" radius="full" variant="ghost">
				<EyeOpenIcon />
			</IconButton>
		</div>
	);
}
