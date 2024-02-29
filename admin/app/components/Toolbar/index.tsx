import { EyeOpenIcon, Pencil1Icon } from '@radix-ui/react-icons';
import style from './style.module.css';
import { IconButton } from '@radix-ui/themes';
import UploadButton from './UploadButton';

export default function Toolbar() {
	return (
		<div className={style.Toolbar}>
			<UploadButton />
			<IconButton size="4" radius="full" variant="ghost">
				<Pencil1Icon />
			</IconButton>
			<IconButton size="4" radius="full" variant="ghost">
				<EyeOpenIcon />
			</IconButton>
		</div>
	);
}
