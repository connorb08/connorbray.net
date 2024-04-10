import { BoxIcon } from '@radix-ui/react-icons';
import { Button, Dialog, Flex, TextField } from '@radix-ui/themes';
import { useFetcher } from '@remix-run/react';
import { useEffect, useState } from 'react';

export default function NewProjectButton() {
	const fetcher = useFetcher();
	const [open, setOpen] = useState(false);
	const [projectName, setProjectName] = useState('');

	const handleCreate = () => {
		console.log('Create a new project');

		const newProject: Project = {
			name: projectName,
			description: '',
			about: '',
			languages: [],
			stats: [],
			technologies: [],
			links: [],
			// hidden: true,
		};

		try {
			fetcher.submit(JSON.stringify(newProject), {
				method: 'PUT',
				encType: 'application/json',
				action: '/database/project',
				navigate: false,
			});
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		if (fetcher.state === 'loading') {
			window.location.reload();
		}
	}, [fetcher.state]);

	return (
		<>
			<Button onClick={() => setOpen(true)}>Create New Project</Button>
			<Dialog.Root open={open}>
				<Dialog.Content>
					<Dialog.Title>Create New Project</Dialog.Title>
					<Dialog.Description size="2">
						Enter the name of the new project.
					</Dialog.Description>
					<Flex gap="3" mt="4" direction="column">
						<TextField.Root
							placeholder={`Name of the new project.`}
							value={projectName}
							onChange={(event) =>
								setProjectName(event.target.value)
							}
						>
							<TextField.Slot>
								<BoxIcon height="16" width="16" />
							</TextField.Slot>
						</TextField.Root>
						<Flex gap="3" mt="4" justify="end">
							<Button
								variant="soft"
								color="gray"
								onClick={() => setOpen(false)}
							>
								Cancel
							</Button>
							<Button
								variant="solid"
								onClick={async () => {
									handleCreate();
								}}
							>
								Create Project
							</Button>
						</Flex>
					</Flex>
				</Dialog.Content>
			</Dialog.Root>
		</>
	);
}
