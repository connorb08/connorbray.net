import { Button, Dialog } from '@radix-ui/themes';
import type { PropsWithChildren } from 'react';
import { UpdateProjectForm } from './UpdateProjectForm';

export function UpdateProjectButton(
	props: PropsWithChildren<{ project: Project }>
) {
	return (
		<Dialog.Root>
			<Dialog.Trigger>
				<Button>Edit project</Button>
			</Dialog.Trigger>
			<Dialog.Content className="max-w-7xl">
				<Dialog.Title>Edit project</Dialog.Title>
				<Dialog.Description size="2" mb="4">
					Make changes to your project info.
				</Dialog.Description>
				<UpdateProjectForm project={props.project} />
				<Dialog.Close>
					<Button>Close</Button>
				</Dialog.Close>
			</Dialog.Content>
		</Dialog.Root>
	);
}
