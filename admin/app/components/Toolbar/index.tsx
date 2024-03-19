import { EyeOpenIcon, Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import style from './style.module.css';
import { IconButton } from '@radix-ui/themes';
import UploadButton from './UploadButton';

const deleteSelected = () => {
	console.log('delete selected');
};

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
			<IconButton
				size="4"
				radius="full"
				variant="ghost"
				onClick={deleteSelected}
			>
				<TrashIcon />
			</IconButton>
		</div>
	);
}
