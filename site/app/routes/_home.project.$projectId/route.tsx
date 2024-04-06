import { json } from '@remix-run/cloudflare';
import { type LoaderFunctionArgs } from '@remix-run/cloudflare';
import { useLoaderData, useParams } from '@remix-run/react';
import ProjectOverview from '~/components/Projects/ProjectOverview';

export async function loader({ params }: LoaderFunctionArgs) {
	const res = await fetch(
		'https://api.connorbray.net/api/project/' + params.projectId
	);
	const data: Project = await res.json();

	return json(
		{
			...data,
			id: params.projectId,
		} as Project,
		{ headers: { 'Cache-Control': 'public, max-age=3600' } }
	);
}

export default function Project() {
	const project = useLoaderData<typeof loader>();
	const { projectId } = useParams();
	return (
		<ProjectOverview
			id={''}
			name={''}
			description={''}
			stats={[]}
			technologies={[]}
			about={''}
			languages={[]}
		/>
	);
}
