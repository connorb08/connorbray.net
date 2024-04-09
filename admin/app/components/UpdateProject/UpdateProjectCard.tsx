import type { PropsWithChildren } from 'react';
import { UpdateProjectForm } from './UpdateProjectForm';
import { Card } from '@radix-ui/themes';

export function UpdateProjectCard(
	props: PropsWithChildren<{ project: Project }>
) {
	return (
		<Card className="flex-1 max-w-7xl">
			<UpdateProjectForm project={props.project} />
		</Card>
	);
}
