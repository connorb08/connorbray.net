import { InfoCircledIcon, TrashIcon } from '@radix-ui/react-icons';
import {
	AlertDialog,
	Button,
	Callout,
	Flex,
	IconButton,
	Strong,
	TextField,
	Tooltip,
} from '@radix-ui/themes';
import { useFetcher } from '@remix-run/react';
import type { PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';

export function DeleteContentButton(
	props: PropsWithChildren<{ project: Project }>
) {
	const fetcher = useFetcher();
	const [open, setOpen] = useState(false);
	const [error, setError] = useState('');

	const handleDelete = async () => {
		setOpen(false);
	};

	useEffect(() => {
		if (fetcher.state === 'loading') {
			window.location.reload();
		}
	}, [fetcher.state]);

	return (
		<>
			<Tooltip content="Delete project">
				<IconButton onClick={() => setOpen(true)} color="red">
					<TrashIcon />
				</IconButton>
			</Tooltip>
			<AlertDialog.Root open={open}>
				<AlertDialog.Content>
					<AlertDialog.Title>Delete File</AlertDialog.Title>
					<AlertDialog.Description size="2">
						Are you sure? File <Strong>{'filename'}</Strong> will be
						permanently deleted.
					</AlertDialog.Description>
					<Flex gap="3" mt="4" direction="column">
						{error ? (
							<Callout.Root color="red" size="1">
								<Callout.Icon>
									<InfoCircledIcon />
								</Callout.Icon>
								<Callout.Text>{error}</Callout.Text>
							</Callout.Root>
						) : null}
						<Flex gap="3" mt="4" justify="end">
							<Button
								variant="soft"
								color="gray"
								onClick={() => {
									setError('');
									setOpen(false);
								}}
							>
								Cancel
							</Button>
							<Button
								variant="solid"
								color="red"
								onClick={async () => {
									handleDelete();
								}}
							>
								Delete File
							</Button>
						</Flex>
					</Flex>
				</AlertDialog.Content>
			</AlertDialog.Root>
		</>
	);
}
