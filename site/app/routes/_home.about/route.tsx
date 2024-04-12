import About from '~/components/About';
import type {
	AboutProps,
	EducationProps,
	JobProps,
	LeadershipRoleProps,
} from '~/components/About/types';
import { defer } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';

const leadership: LeadershipRoleProps[] = [
	{
		name: 'University of Maine Student Government Inc.',
		position: 'Board Member',
	},
	{
		name: 'University of Maine Alumni Association',
		position: 'Board Member',
	},
];

// const projects: ProjectProps[] = [
// 	{
// 		name: 'connorbray.net',
// 		type: 'Web Application',
// 		url: 'https://connorbray.net',
// 		urlText: 'connorbray.net',
// 		description: '',
// 		img: '',
// 	},
// ];

const aboutProps: AboutProps = {
	jobs: [],
	education: [],
	employmentStatus: 1,
	leadership,
	projects: Promise.resolve([]),
};

export const loader = async () => {
	const project_data = fetch('https://api.connorbray.net/api/projects').then(
		(res) => res.json()
	);
	const employment_data = fetch(
		'https://api.connorbray.net/api/employment'
	).then((res) => res.json());
	const education_data = fetch(
		'https://api.connorbray.net/api/education'
	).then((res) => res.json());

	const result = await Promise.all([employment_data, education_data]);
	return defer(
		{
			employment_data: result[0],
			education_data: result[1],
			projects: project_data,
		},
		{ headers: { 'Cache-Control': 'public, max-age=3600' } }
	);
};

export default function AboutPage() {
	const { employment_data, education_data, projects } = useLoaderData<
		typeof loader
	>() as unknown as {
		employment_data: JobProps[];
		education_data: EducationProps[];
		projects: Promise<Project[]>;
	};

	return (
		<div className="w-full bg-primary-1">
			<About
				{...aboutProps}
				jobs={employment_data}
				education={education_data}
				projects={projects}
			/>
		</div>
	);
}
