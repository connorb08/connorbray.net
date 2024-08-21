import { Dialog, Flex, IconButton } from '@radix-ui/themes';
import { EyeOpenIcon } from '@radix-ui/react-icons';

export default function PreviewContent(
	props: PropsWithChildren<{ content: string }>
) {
	let content = `https://content.connorbray.net/${props.content}`;

	if (props.content.startsWith('dist/')) {
		content = `https://content.connorbray.net/${props.content.replace(
			'dist/',
			''
		)}`;
	}

	return (
		<Dialog.Root>
			<Dialog.Trigger>
				<IconButton color="amber">
					<EyeOpenIcon />
				</IconButton>
			</Dialog.Trigger>

			<Dialog.Content width="80vw">
				<Flex direction="column" gap="3">
					{props.content.endsWith('.pdf') ? (
						<iframe src={content} width="fit" height="800" />
					) : (
						<img src={content} alt="content" />
					)}
				</Flex>
			</Dialog.Content>
		</Dialog.Root>
	);
}
