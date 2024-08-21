import { Dialog, Flex, IconButton, Tooltip } from '@radix-ui/themes';
import { useState, type PropsWithChildren } from 'react';
import { UpdateProjectForm } from './UpdateProjectForm';
import { Cross1Icon, Pencil2Icon } from '@radix-ui/react-icons';

export function UpdateProjectButton(
	props: PropsWithChildren<{ project: Project }>
) {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Tooltip content="Edit Project">
				<IconButton onClick={() => setOpen(true)}>
					<Pencil2Icon />
				</IconButton>
			</Tooltip>
			<Dialog.Root open={open}>
				<Dialog.Content className="max-w-7xl">
					<Flex justify="end">
						<IconButton
							variant="ghost"
							onClick={() => setOpen(false)}
							radius="full"
						>
							<Cross1Icon />
						</IconButton>
					</Flex>

					<Dialog.Title>Edit project</Dialog.Title>
					<Dialog.Description size="2" mb="4">
						Make changes to your project info.
					</Dialog.Description>
					<UpdateProjectForm
						project={props.project}
						handleClose={() => setOpen(false)}
					/>
				</Dialog.Content>
			</Dialog.Root>
		</>
	);
}
