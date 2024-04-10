import { InfoCircledIcon, TrashIcon } from '@radix-ui/react-icons';
import {
	AlertDialog,
	Button,
	Callout,
	Flex,
	IconButton,
	TextField,
	Tooltip,
} from '@radix-ui/themes';
import { useFetcher } from '@remix-run/react';
import type { PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';

export function DeleteProjectButton(
	props: PropsWithChildren<{ project: Project }>
) {
	const fetcher = useFetcher();
	const [open, setOpen] = useState(false);
	const [confirmProjectName, setConfirmProjectName] = useState('');
	const [error, setError] = useState('');

	const handleDelete = async () => {
		if (confirmProjectName !== props.project.name) {
			console.log('incorrect project name');
			setError('Incorrect project name');
			return;
		}
		fetcher.submit(JSON.stringify(props.project), {
			method: 'DELETE',
			encType: 'application/json',
			action: '/database/project',
		});
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
					<AlertDialog.Title>Delete Project</AlertDialog.Title>
					<AlertDialog.Description size="2">
						Are you sure? This project will be removed from the
						database.
					</AlertDialog.Description>
					<Flex gap="3" mt="4" direction="column">
						<TextField.Root
							color="red"
							placeholder={`Enter ${props.project.name} to delete.`}
							value={confirmProjectName}
							onChange={(event) =>
								setConfirmProjectName(event.target.value)
							}
						>
							<TextField.Slot>
								<TrashIcon height="16" width="16" />
							</TextField.Slot>
						</TextField.Root>
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
								Delete Project
							</Button>
						</Flex>
					</Flex>
				</AlertDialog.Content>
			</AlertDialog.Root>
		</>
	);
}
