import { json } from '@remix-run/cloudflare';
import { type LoaderFunctionArgs } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import ProjectOverview from '~/components/Projects/ProjectOverview';

export async function loader({ params }: LoaderFunctionArgs) {
	const res = await fetch(
		'https://api.connorbray.net/api/project/' + params.projectId
	);
	let data: Project;
	try {
		data = await res.json();
	} catch (error) {
		return json({ error: 'Project not found' }, { status: 404 });
	}

	return json(
		{
			project: { ...data } as Project,
		},
		{ headers: { 'Cache-Control': 'public, max-age=3600' } }
	);
}

export default function Project() {
	const { project, error } = useLoaderData() as {
		project: Project | null;
		error: string | null;
	};
	if (error || project === null) {
		return <div>{error}</div>;
	}
	return (
		<div className="h-full flex flex-col items-center justify-center">
			<div className="bg-gray-3 shadow-2xl text-gray-12 overflow-hidden sm:rounded-lg max-w-7xl">
				<ProjectOverview
					_id={project._id}
					name={project.name}
					description={project.description}
					stats={project.stats}
					technologies={project.technologies}
					about={project.about}
					languages={project.languages}
					links={project.links}
				/>
			</div>
		</div>
	);
}
