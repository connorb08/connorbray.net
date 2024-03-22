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
	employmentStatus: 1,
	leadership,
	projects,
};

export const loader = async ({}: LoaderFunctionArgs) => {
	const res = await fetch('https://api.connorbray.net/api/employment');
	const data = await res.json();
	return json({ data });
};

export default function () {
	const { data } = useLoaderData<typeof loader>();

	return (
		<div className="w-full bg-primary-1">
			<About {...aboutProps} jobs={data} />
		</div>
	);
}
