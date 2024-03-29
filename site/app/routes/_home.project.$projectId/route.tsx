import { useParams } from '@remix-run/react';
import ProjectOverview from '~/components/Projects/ProjectOverview';

export default function Home() {
	const { projectId } = useParams();
	return (
		<ProjectOverview
			id={''}
			name={''}
			description={''}
			stats={[]}
			technologies={[]}
		/>
	);
}
