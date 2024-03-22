import About from '~/components/About';
import type {
	AboutProps,
	LeadershipRoleProps,
	ProjectProps,
} from '~/components/About/types';
import { json, type LoaderFunctionArgs } from '@remix-run/cloudflare';
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

const projects: ProjectProps[] = [
	{
		name: 'connorbray.net',
		type: 'Web Application',
		url: 'https://connorbray.net',
		urlText: 'connorbray.net',
		description: '',
		img: '',
	},
];

const aboutProps: AboutProps = {
	jobs: [],
	employmentStatus: 1,
	leadership,
	projects,
};

export const loader = async ({}: LoaderFunctionArgs) => {
	const employment_data = fetch(
		'https://api.connorbray.net/api/employment'
	).then((res) => res.json());
	const education_data = fetch(
		'https://api.connorbray.net/api/education'
	).then((res) => res.json());
	const result = await Promise.all([employment_data, education_data]);
	return json(
		{ employment_data: result[0], education_data: result[1] },
		{ headers: { 'Cache-Control': 'public, max-age=3600' } }
	);
};

export default function () {
	const { employment_data, education_data } = useLoaderData<typeof loader>();

	return (
		<div className="w-full bg-primary-1">
			<About {...aboutProps} jobs={employment_data} />
		</div>
	);
}
