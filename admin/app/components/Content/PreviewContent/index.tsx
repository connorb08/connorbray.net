import { Dialog, Flex, IconButton } from '@radix-ui/themes';
import { EyeOpenIcon } from '@radix-ui/react-icons';

export default function PreviewContent(
	props: PropsWithChildren<{ img: string }>
) {
	return (
		<Dialog.Root>
			<Dialog.Trigger>
				<IconButton color="amber">
					<EyeOpenIcon />
				</IconButton>
			</Dialog.Trigger>

			<Dialog.Content width={'80vw'}>
				<Dialog.Title>View Content</Dialog.Title>
				<Dialog.Description size="2" mb="4">
					Make changes to your profile.
				</Dialog.Description>

				<Flex direction="column" gap="3">
					<img src={props.img} alt="content" />
				</Flex>
			</Dialog.Content>
		</Dialog.Root>
	);
}
