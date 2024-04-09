import { json } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { useState } from 'react';
import { Button, Dialog } from '@radix-ui/themes';
import {
	UpdateProjectButton,
	UpdateProjectForm,
} from '~/components/UpdateProject';

export async function loader() {
	try {
		const response = await fetch('https://api.connorbray.net/api/projects');
		const projectDocuments: Project[] = await response.json();
		return json({ projectDocuments, error: null });
	} catch (error) {
		console.error(error);
		return json({
			error: 'Error fetching projects',
			projectDocuments: [],
		});
	}
}

export default function Projects() {
	const { projectDocuments, error } = useLoaderData<typeof loader>();
	const [projects] = useState<Project[]>(projectDocuments as Project[]);
	if (error) {
		return <div>{error}</div>;
	}

	return (
		<>
			Projects: {JSON.stringify(projects)}
			<div className="flex justify-center">
				<UpdateProjectButton project={projects[0]} />
				<Button>Test</Button>
			</div>
		</>
	);
}
